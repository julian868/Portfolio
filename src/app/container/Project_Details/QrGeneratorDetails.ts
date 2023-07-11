import { Component, ElementRef, NgModule, ViewChild } from "@angular/core";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { QrCodeModule } from 'ng-qrcode';
import { ButtonModule } from "primeng/button";
import QRCodeStyling from "qr-code-styling";
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';


@Component({
    standalone: true,
    imports: [QrCodeModule, ButtonModule, ColorPickerModule, FormsModule],
    template: `
        <div id="mainContainer">
            <div id="qrGencontainer">
            <div #canvas></div>
            <input type="text" placeholder="Enter Text Here" #qrInput>
            <div id="colorPickerContainer">
                <h4>Dot:</h4>
                <p-colorPicker [(ngModel)]="dotsColor" (onChange)="updateChoices()">Dot Colour</p-colorPicker>
                <h4>Background:</h4>
                <p-colorPicker [(ngModel)]="backgroundColor" (onChange)="updateChoices()"></p-colorPicker>
            </div>
            <div id="colorPickerContainer">
                <h4>Corner Square:</h4>
                <p-colorPicker [(ngModel)]="cornerSquareColor" (onChange)="updateChoices()"></p-colorPicker>
                <h4>Corner Dot:</h4>
                <p-colorPicker [(ngModel)]="cornerDotsColor" (onChange)="updateChoices()"></p-colorPicker>
            </div>
            <p-button (onClick)="updateChoices()" styleClass="p-button-rounded p-button-secondary">Generate QR Code</p-button>
            </div>
            <div id="information">
                <p>This is a simple application which generates a QR code based on the text entered into the text 
                    field. Colour properties can be changed using the colour pickers. Colour changes take effect 
                    on the "onChange" event while the QR code is updated on the click of the "Generate QR Code" button.
                    <br><br>
                    This application was built within the angular development platform as a standalone component using the 
                    "styled-qr-code" library. As this application was built on top of my portfolio, it continues the use of 
                    PrimeNG components as well. In its development common angular techniques were implemented such as two-way binding,
                    use of "@ViewChild", event handling and DOM manipulation.
                    <br><br>
                    The source code provided below is that of this entire portfolio page built using Angular, of which 
                    this QR Code Generator application is just a single standalone component. This portfolio site in 
                    its entirety should be considered a portfolio item.
                    <br><br>
                </p>
                <div id="informationFooter">
                    <label><h4 id="skills">Skills</h4></label>
                    <ul>
                        <li>Angular</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>NPM Libraries</li>
                    </ul>
                    <br>
                    <span class="sourceCode">View Source Code: <a href="https://github.com/julian868/JulianEllisPortfolio" target="_blank">https://github.com/julian868/JulianEllisPortfolio</a></span>
                </div>
            </div>
        </div>
        `,
    styles: [`
        #information{
            display:flex;
            flex-direction:column;
            position:relative;
            align-items:center;
        }
        #informationFooter{
            display:flex;
            flex-direction:column;
            align-items:center;
            padding: 20px;
            position: absolute;
            bottom: 0;
        }
        a:visited{ 
            color: #dedede 
        } 
        .sourceCode{
            padding:0px; 
            display:flex; 
            justify-content:center; 
            font-size:smaller; 
            gap:5px
        } 
        h4{
            margin:0px
        }
        h4#skills{
            justify-self:center;
        } 
        #information{
            padding:30px; 
            padding-top:0px
        } 
        #mainContainer{
            display:flex
        } 
        #qrGencontainer{
            display:flex; 
            flex-direction: column; 
            align-items:center; 
            gap: 15px;
        } 
        #colorPickerContainer{
            display:flex; 
            gap:5px; 
            align-Items:center;
        }
        ul{
            list-style :none; 
            width:100%;
            display:inline-flex; 
            justify-content:center;
            align-items:center;
            column-gap:10px;
            margin:0px;
        }
        `]
})
export class QrGeneratorDetails {
    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) { } 

    @ViewChild('canvas', { static: true }) canvas!: ElementRef;
    @ViewChild('qrInput') qrInput!: ElementRef;
    data = 'Welcome To My Portfolio';
    extension = 'svg';
    qrCode!: QRCodeStyling;
    dotsColor: string = '#0738db';
    backgroundColor: string = '#f2f4f7';
    cornerSquareColor: string = '#00000';
    cornerDotsColor: string = '#00000';

    ngOnInit(): void {
        this.qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            type: 'svg',
            data: this.data,
            image: '/assets/images/portfolioIcon.png',
            margin: 10,
            qrOptions: {
                typeNumber: 0,
                mode: 'Byte',
                errorCorrectionLevel: 'Q'
            },
            imageOptions: {
                hideBackgroundDots: true,
                imageSize: 0.4,
                margin: 20,
                crossOrigin: 'anonymous',
            },
            dotsOptions: {
                color: this.dotsColor,
                type: 'rounded'
            },
            backgroundOptions: {
                color: this.backgroundColor
            },
            cornersSquareOptions: {
                color: this.cornerSquareColor,
                type: 'extra-rounded',
            },
            cornersDotOptions: {
                color: this.cornerDotsColor,
                type: 'dot',
            }
        });
        this.qrCode.append(this.canvas.nativeElement);
    }
    updateChoices() {
        if (this.qrInput.nativeElement.value === '')
            this.qrCode.update({
                dotsOptions: {
                    color: this.dotsColor
                },
                backgroundOptions: {
                    color: this.backgroundColor
                },
                cornersSquareOptions: {
                    color: this.cornerSquareColor
                },
                cornersDotOptions: {
                    color: this.cornerDotsColor
                }
            });
        else this.qrCode.update({
            data: this.qrInput.nativeElement.value,
            dotsOptions: {
                color: this.dotsColor
            },
            backgroundOptions: {
                color: this.backgroundColor
            },
            cornersSquareOptions: {
                color: this.cornerSquareColor
            },
            cornersDotOptions: {
                color: this.cornerDotsColor
            }
        });
    }
}