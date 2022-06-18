import { Component, OnInit } from '@angular/core';
import { DataParserService } from '../services/data-parser.service';

@Component({
  selector: 'app-vax-reg',
  templateUrl: './vax-reg.component.html',
  styleUrls: ['./vax-reg.component.css']
})
export class VaxRegComponent {
  allVaxRecords = this.dataParser.vaxRegParsedData$
  constructor(private dataParser: DataParserService) { }

}
