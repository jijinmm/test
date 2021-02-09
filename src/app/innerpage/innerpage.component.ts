import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { VideosService } from '../shared/videos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-innerpage',
  templateUrl: './innerpage.component.html',
  styleUrls: ['./innerpage.component.css']
})
export class InnerpageComponent implements OnInit {
  postId:any;
  dataById:any;
  data:any;

  constructor(private _videosService:VideosService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params => {
        this.postId = params.id
        console.log(params.id)
      })
  }

  ngOnInit(): void {
    this._videosService.getJSON().subscribe(data => {
      this.data= data;
      this.dataById = this.data.filter((x:any) => x.id == this.postId);
      console.log(this.dataById[0].videoUrl)
    });
  }



}
