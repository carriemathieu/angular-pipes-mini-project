import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ! = "definite assignment assertion", name = string | undefined. "There is a property called name with a type of string | undefined. It starts with a value of undefined. But every time I get or set that property, I want to treat it as type string."

  name!: string;

  onNameChange(value: string) {
    this.name = value
  }
}
