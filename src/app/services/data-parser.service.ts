import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root',
})
export class DataParserService {

  constructor(private http: HttpClient, private papa: Papa) {}

  parseData(filePath: string): Array<any> {
    this.http
      .get(filePath, { responseType: 'text' })
      .subscribe((data) => {
        this.papa.parse(data, {
          // header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log('Parsed: ', result);
            return result.data;
          },
        });
      });
      return [];
    }
}
