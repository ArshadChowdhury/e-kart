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

  ngOnInit() {
    console.log(this.display);
  }
  onClick() {
    this.display = !this.display;
    console.log(this.display);
  }
}
