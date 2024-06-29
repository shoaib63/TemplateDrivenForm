import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';

  firstName: string = "";
  lastName: string = "";
  dob: string = "";
  email: string = '';


  @ViewChild('registrationFrom') form: NgForm;

  genders = [
    { id: 'check-male', value: 'male', display: "Male" },
    { id: 'check-female', value: 'female', display: "Female" },
    { id: 'check-other', value: 'other', display: 'Prefer not to say' },
  ];

  onFormSubmitted() {
    console.log(this.form);
  }


  GenerateUsername() {
    let username = "";
    if (this.firstName.length >= 3)
      username += this.firstName.slice(0, 3);
    else {
      username += this.firstName;
    }

    if (this.lastName.length >= 3)
      username += this.lastName.slice(0, 3);
    else
      username += this.lastName;

    let birthyear = new Date(this.dob).getFullYear();
    username += birthyear;

    username = username.toLocaleLowerCase();

    // console.log(username);
    // this.form.controls["username"].setValue(username);

    this.form.setValue({
      
    });
  }
}
