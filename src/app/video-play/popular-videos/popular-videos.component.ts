import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VideoService } from './../../services/video.service';
import { Video } from './../../models/video.model';


@Component({
  selector: 'uo-popular-videos',
  templateUrl: './popular-videos.component.html',
  styleUrls: ['./popular-videos.component.css']
})
export class PopularVideosComponent implements OnInit {

  thumbVideos: Video[];

  constructor(public videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.videoService.getMostPoplular()
      .subscribe(result => {
        this.thumbVideos = result;
      });
    });
  }

  changeMenu(type: string) {
    this.videoService.changeMenuType(type);
  }

}
