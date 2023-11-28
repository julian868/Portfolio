import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
//const crypto = require('crypto');


@Component({
  selector: 'app-encryptor-demo',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './encryptor-demo.component.html',
  styleUrls: ['./encryptor-demo.component.css']
})
export class EncryptorDemoComponent {
  // secretKey!: string;
  
  // algorithm = 'aes-256-cbc'
  // iv = crypto.randomBytes(16);
  // key = crypto.createHash('sha512').update(this.secretKey, 'utf-8').digest('hex').substr(0, 32);

  // encryptionResult!: { iv: string, encryptedData: string };


  // encrypt(plainText:string) {
  //   let cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
  //   let encrypted = cipher.update(plainText);
  //   encrypted = Buffer.concat([encrypted, cipher.final()]);
  //   this.encryptionResult = { iv: this.iv.toString('hex'), encryptedData: encrypted.toString('hex') };
  // }

  // decrypt(cipherText: { iv: string, encryptedData: string }) {
  //   let iv = Buffer.from(cipherText.iv, 'hex');
  //   let decipher = crypto.createDecipheriv(this.algorithm, Buffer.from(this.key), iv);
  //   let decrypted = decipher.update(Buffer.from(cipherText.encryptedData, 'hex'));
  //   decrypted = Buffer.concat([decrypted, decipher.final()]);
  //   return decrypted;
  // }
}


