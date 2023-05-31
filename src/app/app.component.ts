import { Component } from '@angular/core';
// import { Database } from "better-sqlite3";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-collection-manager';

  constructor() {

    // console.log(process.env);
    // console.log(process.env.NODE_ENV);

    // const db = require('better-sqlite3')(':memory:');

    // console.log(db)
  }

  // sqlite3 = require('sqlite3').verbose();
  // db = new this.sqlite3.Database(':memory:');


}
