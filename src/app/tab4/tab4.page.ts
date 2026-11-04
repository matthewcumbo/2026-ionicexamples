import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonInput, IonItem, IonButton, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
    imports: [IonCard, IonCardContent, IonCardContent, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonButton, IonItem, IonInput, IonLabel, IonList, IonHeader, IonToolbar, IonTitle, IonContent, ReactiveFormsModule]
})
export class Tab4Page {

firstName = "";
  lastName = "";
  age = "";
  showDetails = false;

  /* 
    This formGroup is a FormGroup object that contains three FormControl objects, one for each input field in the form.
    These are used to track the value and validation status of each input field in the form. The FormGroup is used to group the FormControl objects together and manage their state as a whole.
  */
  formGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
  });

  constructor() {}

  // This submit function is a custom function that is called when the form is submitted
  submit(){
    // The 'this' keyword is used to access the properties of the class, in this case the formGroup and the controls within it
    this.firstName = this.formGroup.controls.firstName.value;
    this.lastName = this.formGroup.controls.lastName.value;
    this.age = this.formGroup.controls.age.value;

    // This if statement checks if the firstName, lastName, and age are not null, and if they are not, it sets the showDetails property to true
    if(this.firstName !== null && this.lastName !== null && this.age !== null ){
      this.showDetails = true;
    }
  }

}
