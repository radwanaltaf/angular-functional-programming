import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataParserService } from '../services/data-parser.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home-vax',
  templateUrl: './home-vax.component.html',
  styleUrls: ['./home-vax.component.css']
})
export class HomeVaxComponent {
  allVaxRecords = this.dataParser.vaxParsedData$

  constructor(private http: HttpClient, private dataParser: DataParserService) { }

  // ngOnInit(): void {
  // }

  // ngAfterViewInit(): void {
  //   this.dataParser.vaxParsedData$.subscribe((data) => {console.log(data)})

  // }
  

  // getData(): Array<any> {
  //   return this.dataParser.parseData('assets/vax_malaysia.csv');
  // }

}
