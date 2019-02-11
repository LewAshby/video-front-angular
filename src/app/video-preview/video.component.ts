import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../models/video.model';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'uo-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos: Video[];
  videosTv: Video[];
  actual_type: string;
  errorMsg: string;


  constructor(public videoService: VideoService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.actual_type = params['type'];
    });
  }

  getVideosAll(): void {
    this.videoService.getVideoAll()
      .subscribe(result => {
        this.videos = result;
      },
      videoError => this.errorMsg = videoError);

      this.videoService.getVideoAllByType('tv')
      .subscribe(result => {
        this.videosTv = result;
      },
      videoError => this.errorMsg = videoError);
  }

  changeMenu(type: string) {
    this.videoService.changeMenuType(type);
  }

  ngOnInit() {
    this.getVideosAll();
    this.route.params.subscribe(params => {
      this.videoService.changeMenuType(params['type']);
      this.actual_type = params['type'];
    });
  }

}
