import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.css',
})
export class Convert {
  inputC: number = 0;
  inputF: number = 0;
  inputMet: number = 0;
  inputFeet: number = 0; 
  result1: number = 0;
  result2: number = 0;
  result3: number = 0;
  result4: number = 0;

  //Metoder:
  farenheit(): void{
    this.result1 = this.inputC * 9/5 + 32;
  }

  celsius(): void {
    this.result2 = (this.inputF - 32) / 1.8;
  }

  feet(): void {
    this.result3 = this.inputMet * 3.28;
  }

  meter(): void {
    this.result4 = this.inputFeet * 0.3048;
  }
}
