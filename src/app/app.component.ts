import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data: any;
  data$ = [];
  title = 'boston';
  today = new Date();
  ngOnInit() {
    let headers = new HttpHeaders({});
    this.http
      .get<any>(
        'https://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=d165339b5bc5a67a68ea36b2a7695185',
        {
          headers: headers,
        }
      )
      .subscribe((data) => {
        this.data = data;
        console.log(data);
      });
  }
}
