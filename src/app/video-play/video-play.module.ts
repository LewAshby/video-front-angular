import { videoPlayRouting } from './video-play.routes';
import { RouterModule } from '@angular/router/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayVideoComponent } from './play-video/play-video.component';
import { PopularVideosComponent } from './popular-videos/popular-videos.component';
import { CommentsVideoComponent } from './comments-video/comments-video.component';
import { ContainerPlayComponent } from './container-play.component';

/* Videogular2 */
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    videoPlayRouting,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  declarations: [PlayVideoComponent, PopularVideosComponent, CommentsVideoComponent, ContainerPlayComponent],
  exports: [ContainerPlayComponent]
})
export class VideoPlayModule { }
