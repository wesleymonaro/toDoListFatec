import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TaskService } from '../providers/task.service';
import { LoginPage } from '../pages/login/login';
import { FilterPipe } from '../pipes/filter.pipe';

var config = {
  apiKey: "AIzaSyACpb167bzmxJC9aXrf9Dd0l1QFyl5YOS8",
  authDomain: "todolistfatec.firebaseapp.com",
  databaseURL: "https://todolistfatec.firebaseio.com",
  projectId: "todolistfatec",
  storageBucket: "",
  messagingSenderId: "800418006444"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {mode: 'ios'}),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TaskService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
