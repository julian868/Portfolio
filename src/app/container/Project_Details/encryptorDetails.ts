import { Component } from "@angular/core";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { ImageModule } from "primeng/image";


@Component({
    standalone: true,
    imports:[ImageModule],
    template: `
        <p>
            <p-image src="../../../assets/images/encryptor_1.jpg" width="250" [preview]="true"></p-image>
            This JAVA console application encrypts text inputted by the user and returns cypher text using the AES 
            algorithm. Upon startup the user selects either encryption or decryption mode. In encryption mode 
            the user enters the text to be decoded, followed by a secret key which is used to encrypt the text. 
            The ciphertext is then produced and displayed in the console. The Initialization Vector, IV, is appended 
            to the ciphertext returned. It is not necessary to keep the IV secret.
            <br><br>
            In decryption mode, the user enters the ciphertext which includes the appended IV along with the secret key.
            The IV is first unappended from the ciphertext. The decryption key is then generated using the value entered for 
            the secret key. The ciphertext is then decrypted using the generated key and the IV. The original plaintext is then 
            returned. Manipulation of the IV is handled automatically from the backend and requires no additional operations by the user.
        </p>
        <label><h4>Skills</h4></label>
        <ul>
            <li>JAVA</li>
            <li>AES Encryption</li>
            <li>Bit Manipulation</li>
        </ul>
        <br><br>
        <span class="sourceCode">View Source Code: <a href="https://github.com/julian868/Encryptor" target="_blank">https://github.com/julian868/Encryptor</a></span>
        `,
    styles: [`
        a:visited{
            color:#dedede
            }
        .sourceCode{
            padding:0px;
            display:flex;
            justify-content:center;
            font-size:smaller; gap:5px
            }
        p-image{
            float:left;
            padding-right: 15px
            }
        ul{
            list-style:none;
            width:100%;
            display:inline-flex;
            justify-content:center;
            align-items:center;
            column-gap:10px;
            margin:0px;
            }
        h4{
            text-align:center;
            margin:0px;
            margin-top:5px
            }
        `]

})
export class EncryptorDetails{
    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) {}
}