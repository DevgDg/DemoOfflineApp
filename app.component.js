"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.names = [];
        (new Sqlite("myFirstDb.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS names (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(function (id) {
                _this.database = db;
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    }
    AppComponent.prototype.insert = function () {
        var _this = this;
        this.database.execSQL("INSERT INTO names (firstname, lastname) VALUES (?, ?)", ["dev", "dg"]).then(function (id) {
            console.log("INSERT RESULT", id);
            _this.fetch();
        }, function (error) {
            console.log("INSERT ERROR", error);
        });
    };
    AppComponent.prototype.fetch = function () {
        var _this = this;
        this.database.all("SELECT * FROM names").then(function (rows) {
            _this.names = [];
            for (var row in rows) {
                _this.names.push({
                    "id": rows[row][0],
                    "firstname": rows[row][1],
                    "lastname": rows[row][2]
                });
            }
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
    };
    AppComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.database.all("DELETE FROM names WHERE id = " + id).then(function (id) {
            console.log(id + "th row is deleted");
            _this.fetch();
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFFeEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFPNUM7SUFLSTtRQUFBLGlCQVlDO1FBVkcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDaEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyx3R0FBd0csQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQ3hILEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2QkFBTSxHQUFiO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyx1REFBdUQsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDakcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw0QkFBSyxHQUFaO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDOUMsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0IsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxpQ0FBVSxHQUFqQixVQUFrQixFQUFVO1FBQTVCLGlCQVFDO1FBTkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbkRRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzs7T0FFVyxZQUFZLENBcUR4QjtJQUFELG1CQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbiBcbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcbiAgICBwdWJsaWMgbmFtZXM6IEFycmF5PGFueT47XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gXG4gICAgICAgIHRoaXMubmFtZXMgPSBbXTtcbiAgICAgICAgKG5ldyBTcWxpdGUoXCJteUZpcnN0RGIuZGJcIikpLnRoZW4oZGIgPT4ge1xuICAgICAgICAgICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIG5hbWVzIChpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsIGZpcnN0bmFtZSBURVhULCBsYXN0bmFtZSBURVhUKVwiKS50aGVuKGlkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGI7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnNlcnQoKSB7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChcIklOU0VSVCBJTlRPIG5hbWVzIChmaXJzdG5hbWUsIGxhc3RuYW1lKSBWQUxVRVMgKD8sID8pXCIsIFtcImRldlwiLCBcImRnXCJdKS50aGVuKGlkID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XG4gICAgICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZldGNoKCkge1xuICAgICAgICB0aGlzLmRhdGFiYXNlLmFsbChcIlNFTEVDVCAqIEZST00gbmFtZXNcIikudGhlbihyb3dzID0+IHtcbiAgICAgICAgICAgIHRoaXMubmFtZXMgPSBbXTtcbiAgICAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHJvd3Nbcm93XVswXSxcbiAgICAgICAgICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogcm93c1tyb3ddWzFdLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IHJvd3Nbcm93XVsyXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVJdGVtKGlkOiBudW1iZXIpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kYXRhYmFzZS5hbGwoXCJERUxFVEUgRlJPTSBuYW1lcyBXSEVSRSBpZCA9IFwiICsgaWQpLnRoZW4oaWQgPT4ge1xuICAgICAgICAgICBjb25zb2xlLmxvZyhpZCArIFwidGggcm93IGlzIGRlbGV0ZWRcIik7XG4gICAgICAgICAgIHRoaXMuZmV0Y2goKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTRUxFQ1QgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=