import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { VideoService } from '../../../../services/video.service';

@Component({
  selector: 'uo-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(public element: ElementRef, private videoService: VideoService) {

  }

  selectType(tag): void {
    const li = this.element.nativeElement.querySelectorAll('li');
      for (const l of li) {
        l.setAttribute('class', '');
      }
    if (tag) {
      if (tag !== 'clean') {
        this.element.nativeElement.querySelector('#' + tag).setAttribute('class', 'active');
      }
    }
  }

  ngOnInit() {
    this.videoService.changeEmitted$.subscribe(type => {
      this.selectType(type);
    });
  }

}
