import {Component} from "@angular/core";
 
var Sqlite = require("nativescript-sqlite");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    private database: any;
    public names: Array<any>;

    public constructor() {
 
        this.names = [];
        (new Sqlite("myFirstDb.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS names (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(id => {
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }

    public insert() {
        this.database.execSQL("INSERT INTO names (firstname, lastname) VALUES (?, ?)", ["myFirstName", "myLastName"]).then(id => {
            console.log("INSERT RESULT", id);
            this.fetch();
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

    public fetch() {
        this.database.all("SELECT * FROM names").then(rows => {
            this.names = [];
            for(var row in rows) {
                this.names.push({
                    "id": rows[row][0],
                    "firstname": rows[row][1],
                    "lastname": rows[row][2]
                });
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    public deleteItem(id: number){
        
        this.database.all("DELETE FROM names WHERE id = " + id).then(id => {
           console.log(id + "th row is deleted");
           this.fetch();
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

}