import { Component } from '@angular/core';
// The IonIcon and IonText below were added to the imports to allow usage of these modules in this TS file
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonText } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // The IonIcon and IonText modules were added below to allow them to be used in the HTML file of this page
  imports: [IonIcon, IonText, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {}
}
