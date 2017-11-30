import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  statisticsList;
  key: String = 'id';
  reverse: boolean = false;
  p: number = 1;
  total: number;
  table: boolean = true;
  public barChart1Labels;
  public barChart2Labels;
  public barChart3Labels;
  public barChartType: String = 'bar';
  public barChartLegend:boolean = true;
  public barChart1Data:any[];
  public barChart2Data:any[];
  public barChart3Data:any[];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartData:number[];
  public doughnutChartLabels:string[];
  
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getStatistics().subscribe(list => {
      this.statisticsList = list.stats;
      this.total = list.metadata.total;
       
      this.barChart1Labels = ["Created users", "Deleted users"];
      this.barChart2Labels = ["Created cars", "Deleted cars"];
      this.barChart3Labels = ["Created trips"];
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
  
  getData() {
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    this.barChart1Data = [];
    this.barChart2Data = [];
    this.barChart3Data = [];
    this.statisticsList.map(stats => {
      this.doughnutChartLabels.push("Server " + stats.id);
      this.doughnutChartData.push(stats.requests);
      this.barChart1Data.push({data: [stats.userCreate, stats.userDelete], label: "Server " + stats.id});
      this.barChart2Data.push({data: [stats.carCreate, stats.carDelete], label: "Server " + stats.id});
      this.barChart3Data.push({data: [stats.tripCreate], label: "Server " + stats.id});
      //{data: [stats.requests, stats.userCreate, stats.userDelete, stats.carCreate, stats.carDelete, stats.tripCreate], label: "Server " + stats.id}
    });
  }
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 
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
