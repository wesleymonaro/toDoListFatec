import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Task } from "../models/task";
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import firebase from 'firebase';

@Injectable()
export class TaskService{

    constructor(
        public angfire: AngularFireAuth,
        public db: AngularFireDatabase,
        public storage: Storage
    ){ }


    save(tasks: Task[]){
        // this.storage.set("Tasks", JSON.stringify(tasks))
        //     .then(() => console.log("Salvo no local Storage"))

        let id = this.angfire.auth.currentUser.uid;
        //let id = "usuario01";
        console.log("done to save: ", tasks);

        this.db.object(`/${id}/`)
        .set(tasks)
        .catch((err) => console.log("Erro ", err));
    }

    load(): FirebaseListObservable<Task[]>{

        let id = this.angfire.auth.currentUser.uid;
        //let id = "usuario01";
        //return Promise.resolve(this.storage.get('Tasks'));

        return <FirebaseListObservable<Task[]>> this.db.list(`/${id}/`)
        
    }
}