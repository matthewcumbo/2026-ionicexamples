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
  header2 = "Cities";
  list = [
    {
      country: "Malta",
      city: "Valletta",
      capital: true
    },
    {
      country: "England",
      city: "London",
      capital: true
    },
    {
      country: "Italy",
      city: "Rome",
      capital: true
    },
    {
      country: "France",
      city: "Paris",
      capital: true
    },
    {
      country: "Malta",
      city: "Mosta",
      capital: false
    },
    {
      country: "England",
      city: "Newcastle",
      capital: false
    },
    {
      country: "Italy",
      city: "Milan",
      capital: false
    },
    {
      country: "France",
      city: "Marseille",
      capital: false
    }
  ];
}
