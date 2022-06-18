import { Component, OnInit } from '@angular/core';
import { DataParserService } from '../services/data-parser.service';

@Component({
  selector: 'app-vax-reg-state',
  templateUrl: './vax-reg-state.component.html',
  styleUrls: ['./vax-reg-state.component.css']
})
export class VaxRegStateComponent implements OnInit {
  allVaxRegStateRecords = this.dataParser.vaxRegStateParsedData$
  constructor(private dataParser: DataParserService) { }

  ngOnInit(): void {
  }

}
