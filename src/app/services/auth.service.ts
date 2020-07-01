import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  auth = firebase.auth();
  user: firebase.User;

  get authenticated(): boolean {
    return this.user! == null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.user.uid : null;
  }

  login() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        this.user = res.user;
      });
  }
  logout() {
    this.auth.signOut();
  }
}
