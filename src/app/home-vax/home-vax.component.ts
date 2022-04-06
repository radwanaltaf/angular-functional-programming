import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataParserService } from '../services/data-parser.service';

@Component({
  selector: 'app-home-vax',
  templateUrl: './home-vax.component.html',
  styleUrls: ['./home-vax.component.css']
})
export class HomeVaxComponent implements OnInit, AfterViewInit {
  readonly rowData? = this.getData();

  constructor(private http: HttpClient, private dataParser: DataParserService) { }

  ngOnInit(): void {
    // this.dataParser.parseData('assets/vax_malaysia.csv');
    // console.log(this.rowData);
  }

  ngAfterViewInit(): void {
    // this.dataParser.parseData('assets/vax_malaysia.csv');
    console.log(this.rowData);
  }
  

  getData(): Array<any> {
    return this.dataParser.parseData('assets/vax_malaysia.csv');
  }

}
