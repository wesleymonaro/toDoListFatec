import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email_r: string;
  password_r: string;

  email_l: string;
  password_l: string;

  constructor(
    public alertCtrl: AlertController,
    public angfire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    if (this.angfire.auth.currentUser) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  register() {
    this.angfire.auth.createUserWithEmailAndPassword(this.email_r, this.password_r)
      .then((info) => {
        console.log(info);
        this.navCtrl.setRoot(HomePage);

      }).catch((err) => {
        console.log(err);

        this.alertCtrl.create({
          title: "Erro",
          //message: err
        }).present();
      })
  }

  login() {

    this.angfire.auth.signInWithEmailAndPassword(this.email_l, this.password_l)
      .then((info) => {
        console.log(info);
        this.navCtrl.setRoot(HomePage);

      }).catch((err) => {
        console.log(err);

        this.alertCtrl.create({
          title: "Erro",
          //message: err
        }).present();
      })

  }


}
