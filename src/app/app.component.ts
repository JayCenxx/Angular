// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // equal to constructor{this.password=''};
  password = '';
  useLetters = false;
  useNum = false;
  useSym = false;
  length = 0;
  
  onChangeLength(value: string) {
    //random num generator
    // let temp=(value.target as HTMLInputElement).value;
const parsedValue=parseInt(value);

if(!isNaN(parsedValue)){
  this.length=parsedValue;
}

   
  }
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    //if user check these boxes, then add the possible set into validChars
    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNum) {
      validChars += numbers;
    }
    if (this.useSym) {
      validChars += symbols;
    }

    let generatedPw = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPw += validChars[index];
    }
    this.password = generatedPw;
  }


  onChangeUseLetters() {
    //when the function is trigger it ll flip the boolean value
    this.useLetters = !this.useLetters;
  }

  onChangeUseNum() {
    this.useNum = !this.useNum;
  }

  onChangeUseSym() {
    this.useSym = !this.useSym;
  }



  
}
