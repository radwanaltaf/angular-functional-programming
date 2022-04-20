import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataParserService {
  constructor(private http: HttpClient, private papa: Papa) {}
  readonly vaxParsedData$ = this.http
    .get('assets/vax_malaysia.csv', { responseType: 'text' })
    .pipe(
      map((record) => {
        return this.papa.parse(record, {
          // header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log(result);
            return result.data;
          },
        });
      })
    );

  readonly vaxRegParsedData$ = this.http
    .get('assets/vaxreg_malaysia.csv', { responseType: 'text' })
    .pipe(
      map((record) => {
        return this.papa.parse(record, {
          // header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log(result);
            return result.data;
          },
        });
      })
    );
}
