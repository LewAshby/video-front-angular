import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../models/video.model';
import { VideoService } from '../../services/video.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'uo-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css']
})
export class PlayVideoComponent implements OnInit {

  playVideo: Video;
  errorMsg: string;
  downloadPath: string;

  constructor(private route: ActivatedRoute, public videoService: VideoService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.videoService.getVideoByName(params['video'])
        .subscribe(vid => {
          this.playVideo = new Video(vid);
          // this.downloadPath = this.playVideo.ruta.substring(0, (this.playVideo.ruta.length - this.playVideo.nombre.length-4));
          this.downloadPath = this.playVideo.ruta.substring(0, (this.playVideo.ruta.lastIndexOf("/")));
          this.videoService.changeMenuType(vid['type']['name']);
        },
        error => this.errorMsg = error);
    });
  }
}
