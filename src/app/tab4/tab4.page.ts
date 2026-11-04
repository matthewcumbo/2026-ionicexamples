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

  formGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
  });

  constructor() {}

  submit(){
    this.firstName = this.formGroup.controls.firstName.value;
    this.lastName = this.formGroup.controls.lastName.value;
    this.age = this.formGroup.controls.age.value;

    if(this.firstName !== null && this.lastName !== null && this.age !== null ){
      this.showDetails = true;
    }
  }

}
