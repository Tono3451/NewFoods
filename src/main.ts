import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {routes} from './app/app.routes';
import { provideRouter } from '@angular/router';

const firebaseConfig = {
  apiKey: "AIzaSyA3IgTA0fRML1z0T5kH0CkMC731FWCrsxM",
  authDomain: "newfoods-95cb8.firebaseapp.com",
  databaseURL: "https://newfoods-95cb8-default-rtdb.firebaseio.com",
  projectId: "newfoods-95cb8",
  storageBucket: "newfoods-95cb8.firebasestorage.app",
  messagingSenderId: "984249894026",
  appId: "1:984249894026:web:985c35774b31a2148e5973",
  measurementId: "G-ZSC5DTHSVB"
};


bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideRouter(routes)
  ]
})

