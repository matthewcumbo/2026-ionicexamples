import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardSubtitle, IonButton, IonText } from '@ionic/angular';
import { ServiceExample } from '../service-example';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
  imports: [IonText, IonButton, IonCardSubtitle, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Tab6Page implements OnInit {

  private se = inject(ServiceExample);
  
  public student = {
    name:"",
    surname:"",
    age:0
  };

  public choice = "";

  constructor() { }

  ngOnInit() {
    this.student = this.se.student;
  }

  choose(num:number){
    this.choice = this.se.select(num);
  }

}
