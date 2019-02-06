import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { VideoService } from '../../services/video.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'uo-comments-video',
  templateUrl: './comments-video.component.html',
  styleUrls: ['./comments-video.component.css']
})
export class CommentsVideoComponent implements OnInit {

  comments: Observable<Comment[]>;
  commentGroup: FormGroup;

  constructor(public videoService: VideoService, private formBuilder: FormBuilder) {
    this.commentGroup = formBuilder.group({
      'username': '',
      'email': '',
      'comment': ''
    });
  }

  ngOnInit() {
    this.comments = this.videoService.obsComments;
  }

  onSubmit(value: string): void {
    value['video'] = this.videoService.getVideoId();
    this.videoService.sendComment(value);
    this.commentGroup.reset();
  }

}
