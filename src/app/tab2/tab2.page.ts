import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/angular';
// Since the Explore-Container is not used in this page, the module import from the package, as well as the import for the HTML file were removed 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonText]
})
export class Tab2Page {

  constructor() {}

   // These are basic properties that can be used in our HTML 
  first = "Hello there!";
  second = "Bye byeee";

  // The below is an object with its own properties
  person = {
    name:"Matthew",
    surname:"Cumbo",
    age:33
  }
  person2 = {
    name:"Joe",
    surname:"Borg",
    age:101
  }
}
