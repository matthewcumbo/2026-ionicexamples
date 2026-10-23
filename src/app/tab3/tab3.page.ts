import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonListHeader } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonList, IonListHeader, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab3Page {
  constructor() {}

  header = "Capital Cities";
  list = [
    {
      country:"Malta",
      city:"Valletta"
    },
    {
      country:"England",
      city:"London"
    },
    {
      country:"Italy",
      city:"Rome"
    },
    {
      country:"France",
      city:"Paris"
    }
  ];
}
