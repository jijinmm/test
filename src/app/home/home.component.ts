import { Component, OnInit } from '@angular/core';
import { VideosService } from '../shared/videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  constructor(private _videosService:VideosService) { }

  ngOnInit(): void {
    this._videosService.getJSON().subscribe(data => {
      this.data= data;
      console.log(data)
  });
  }

}
