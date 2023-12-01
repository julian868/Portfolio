import { Component } from '@angular/core';
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-encryptor',
  templateUrl: './encryptor.component.html',
  styleUrls: ['./encryptor.component.css']
})
export class EncryptorComponent {
  showEncryptor1: boolean = true;
  showEncryptor2: boolean = true;
  encryptionMode: string = 'encrypt';
  inputPlainText!: string;
  inputCipherText!: string;
  formGroup!: FormGroup;
  output: string ='';
  outputTextHeader: string = '';

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private http: HttpClient
  ) { }

  async encrypt() {
    if (this.inputPlainText != "") {
      this.http.get<any>(`https://vercel-test-ashen-phi.vercel.app/encryption/encrypt/${this.inputPlainText}`)
        .subscribe((res) => {
          this.output = res.cipherText;
          this.outputTextHeader = 'Encrypted Cyphertext:';
        })
    }
  }
  async decrypt() {
      this.http.get<any>(`https://vercel-test-ashen-phi.vercel.app/encryption/decrypt/${this.inputCipherText}`)
        .subscribe((res) => {
          this.output = res.plainText;
          this.outputTextHeader = 'Decrypted Plaintext:'
        },
          error => {
            this.output = 'Invalid Input';
            this.outputTextHeader = 'Error:';
        })
    
  }
  closeOutput() {
    this.output = '';
    this.outputTextHeader = '';
}

}
