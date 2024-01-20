import { Injectable, NgZone } from '@angular/core';

import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
initializeApp(environment.firebase)

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public _AngularFireAuth: AngularFireAuth ,
    private _Router : Router,
    private _AngularFirestore : AngularFirestore
  ) { }

      // Sign in with Google
      GoogleAuth() {
        return this.AuthLogin(new GoogleAuthProvider()).then((res: any) => {
          if (res) {
            console.log('siccess')
          }
        });
      }


      AuthLogin(provider: any) {
        return this._AngularFireAuth
          .signInWithPopup(provider)
          .then((result) => {
            var uid  =  result.user?.uid
            console.log(result);
           /* console.log(result);
            localStorage.setItem('user_uid', JSON.stringify(uid));
            var t = localStorage.getItem('user_uid');
            console.log(t)
            console.log(result.additionalUserInfo?.isNewUser) */
 
            
          })
          .catch((error) => {
            console.log(error);
          });
      }
  







}


