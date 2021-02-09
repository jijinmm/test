import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videos:any;
  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //     console.log(data);
    // });
}

public getJSON(): Observable<any> {
  return this.http.get('assets/data/data.json').pipe();
}

  getUser(userId:any){
  return this.http.get('assets/data/data.json' + "/"+ "1");
  }

}
