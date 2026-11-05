import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonList, IonItem, IonCard, IonCardTitle, IonCardSubtitle } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonButton, IonButtons, IonList, IonItem, IonCard, IonCardTitle, IonCardSubtitle]
})
export class Tab5Page {

  current = "";
  students = [
    {
      name:'Agne',
      surname:'Archipovaite',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Amelia',
      surname:'Mangion',
      class:'IDM 5.2',
      units:['PHP','Apps']
    },
    {
      name:'Christopher',
      surname:'Camilleri',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Craig',
      surname:'Zammit',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Jeremy',
      surname:'Camilleri Portelli',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Nadia',
      surname:'Zammit',
      class:'IDM 5.2',
      units:['PHP','Apps']
    },
    {
      name:'Samuel',
      surname:'Lanzon',
      class:'IDM 5.2',
      units:['PHP','Game']
    },
    {
      name:'Shania',
      surname:'Frendo Galea',
      class:'IDM 5.2',
      units:['PHP','Apps']
    },
  ];

  constructor() { }

  filter(selection:string){
    this.current = selection;
  }

}
