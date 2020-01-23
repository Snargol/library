import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCv8RDGv9horT65EZkKGg7iCRJ65_yFGaQ',
      authDomain: 'tuto-angular-library.firebaseapp.com',
      databaseURL: 'https://tuto-angular-library.firebaseio.com',
      projectId: 'tuto-angular-library',
      storageBucket: 'tuto-angular-library.appspot.com',
      messagingSenderId: '562836823314',
      appId: '1:562836823314:web:cba66c6f9fa0aab2ebe7cb',
      measurementId: 'G-5E82GWXHJ2'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
