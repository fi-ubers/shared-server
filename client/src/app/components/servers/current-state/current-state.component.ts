import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-current-state',
  templateUrl: './current-state.component.html',
  styleUrls: ['./current-state.component.css']
})
export class CurrentStateComponent implements OnInit {
  serversList;
  key: String = 'id';
  reverse: boolean = false;
  p: number = 1;
  total: number;
  active: number = 0;
  table: boolean = true;
  public pieChartType:string = 'pie';
  public pieChartLabels:string[];
  public pieChartData:number[];
  
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getServersList().subscribe(list => {
      this.serversList = list.servers;
      this.total = list.metadata.total;
      
      this.getData();
    },
    err => {
      console.log(err);
      return false;
    });
  }
  
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  getServerStatus(lastConnection) {
    if (lastConnection == null) {
      return "Inactive";
    }
    var connectionDate = new Date(lastConnection);
    var currentDate = new Date();
    var connectionDay = connectionDate.getUTCDate();
    var currentDay = currentDate.getUTCDate();
    var connectionMonth = connectionDate.getUTCMonth();
    var currentMonth = currentDate.getUTCMonth();
    var connectionYear = connectionDate.getUTCFullYear();
    var currentYear = currentDate.getUTCFullYear();
    var connectionHour = connectionDate.getUTCHours();
    var currentHour = currentDate.getUTCHours();
    var connectionMinute = connectionDate.getUTCMinutes();
    var currentMinute = currentDate.getUTCMinutes();
    
    if (connectionYear != currentYear) {
      return (currentYear - connectionYear) + " year/s inactive";
    }
    if (connectionMonth != currentMonth) {
      return (currentMonth - connectionMonth) + " month/s inactive";
    }
    if (connectionDay != currentDay) {
      return (currentDay - connectionDay) + " day/s inactive";
    }
    if (connectionHour != currentHour) {
      return (currentHour - connectionHour) + " hour/s inactive";
    }
    if (currentMinute - connectionMinute > 10) {
      return (currentMinute - connectionMinute) + " minutes inactive";
    }
    
    this.active++;
    return "Active";
    
  }
  
  getData() {
    this.pieChartLabels = ["Active", "Inactive"];
    this.pieChartData = [];
    
    this.pieChartData.push(this.active);
    this.pieChartData.push(this.total - this.active);
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  onChartClick() {
    this.table = false;
  }
  
  onTableClick() {
    this.table = true;
  }

}
