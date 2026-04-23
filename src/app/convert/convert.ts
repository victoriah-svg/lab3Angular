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
  result: number = 0;

  //Metoder:
  farenheit(): void{
    this.result = this.inputC * 9/5 + 32;
  }
}
