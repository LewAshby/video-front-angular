import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/video.service';
import { Video } from '../models/video.model';

@Component({
  selector: 'uo-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  filter: string;
  term: string;
  errorMsg: string;
  videosResult: Video[];

  constructor(public route: ActivatedRoute, public videoService: VideoService) { }

  ngOnInit() {
    this.route.params.subscribe(url => {
      this.filter = url['tipo'];
      this.term = '/search/' + url['searchTerm'];
      this.videoService.searchVideo(url['searchTerm'], "all")
        .subscribe(vids => {
          this.videosResult = vids;
        },
        searchError => this.errorMsg = searchError);
      });
  }

  getCantResult(tipo: string): number {
    let cont = 0;
    for (let i = 0; i < this.videosResult.length; i++) {
      if (this.videosResult[i]['tipo']['name'] === tipo || this.filter === undefined) {
        cont ++;
      }
    }
    this.videoService.changeMenuType(tipo);
    return cont;
  }

  navigatePaginator(direction: string) {    
    this.route.params.subscribe(url => {
      this.filter = url['tipo'];
      this.term = '/search/' + url['searchTerm'];
      if (direction === "next") {
        this.videoService.searchVideo("", "next")
          .subscribe(vids => {
            this.videosResult = vids;
          },
            searchError => this.errorMsg = searchError);
      }
      else if (direction === "previous"){
        this.videoService.searchVideo("", "previous")
          .subscribe(vids => {
            this.videosResult = vids;
          },
            searchError => this.errorMsg = searchError);
      }
    });
  }
  
}
