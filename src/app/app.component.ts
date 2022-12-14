// import { Component, VERSION } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent  {
//   name = 'Angular ' + VERSION.major;
// }

import { Component, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input()
  readonly maxQuantity: number = 0;
  @Output()
  selectedQuantity = 0;

  // constructor() {
  //   this.selectedQuantity = 0;
  // }

  // ngOnInit() {
  //   this.selectedQuantity = 0;
  // }

  enableIncrement: boolean = true;
  enableDecrement: boolean = false;

  validateQuantity(): void {
    if (this.selectedQuantity > 0 && this.selectedQuantity < this.maxQuantity) {
      this.enableIncrement = true;
      this.enableDecrement = true;
    }

    if (this.selectedQuantity === this.maxQuantity) {
      this.enableIncrement = false;
    }

    if (this.selectedQuantity === 0) {
      this.enableDecrement = false;
    }
  }

  onIncrement(): void {
    this.selectedQuantity += 1;
    this.validateQuantity();
  }

  onDecrement(): void {
    this.selectedQuantity -= 1;
    this.validateQuantity();
  }

  onChanged(_newQuantity: number): void {
    this.selectedQuantity = 0;
    if (Number(_newQuantity) < 0 || Number(_newQuantity) > this.maxQuantity) {
      this.selectedQuantity = this.maxQuantity;
      this.validateQuantity();
    } else {
      this.selectedQuantity = Number(_newQuantity);
      this.validateQuantity();
    }
  }

  public get counterMainClass(): string[] {
    return ['product-returns-counter'];
  }

  public get counterButtonClass(): string[] {
    return [
      'product-returns-counter-button',
      'product-returns-counter-button-enable',
    ];
  }

  public get counterButtonDisabledClass(): string[] {
    return [
      'product-returns-counter-button',
      'product-returns-counter-button-disable ',
    ];
  }

  public get counterInputClass(): string[] {
    return ['product-returns-counter-input'];
  }
}
