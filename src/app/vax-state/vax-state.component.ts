import { Component, OnInit } from '@angular/core';
import { DataParserService } from '../services/data-parser.service';

@Component({
  selector: 'app-vax-state',
  templateUrl: './vax-state.component.html',
  styleUrls: ['./vax-state.component.css']
})
export class VaxStateComponent {
  allVaxStateRecords = this.dataParser.vaxStateParsedData$
  constructor(private dataParser: DataParserService) { }

}
