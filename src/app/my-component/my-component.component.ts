import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
})
export class MyComponentComponent {
  title: string = 'Edumy';
  message: string = 'Online learning';
  display: boolean = true;
  name: string = 'Arshad';
  cartNumber: number = 0;

  ngOnInit() {
    console.log(this.display);
  }
  onClick() {
    this.display = !this.display;
    console.log(this.display);
  }

  onInputChange(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  incrementCartNumber() {
    this.cartNumber += 1;
  }

  decrementCartNumber() {
    this.cartNumber -= 1;
  }
}
