import { Component } from '@angular/core';
import { NavController, Storage, LocalStorage, SqlStorage } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    local;
    storage;
    myData;
  constructor(public navCtrl: NavController) {

      /**
       * Local Storage
       * This is how you use local storage!!!!
       */
    //   this.local = new Storage(LocalStorage);
    //   this.local.set("myvarName", "Anthony has a boner!");


    /**
     * SQL Lite
     * This is how to use Sql Lite!!!
     */
    this.storage = new Storage(SqlStorage, {name: "appDb"});
    this.storage.set("myVarName", "Here is my dick");
  }

  printStoredData () {
    //   this.local.get("myvarName").then((result)=>{
    //       console.log(result);
    //   });


    this.storage.get("myVarName").then((result)=>{
        this.myData = result;
    })
  }
}
