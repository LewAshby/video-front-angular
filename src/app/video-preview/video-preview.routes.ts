import { VideoComponent } from './video.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


// Video-Preview Route Configuration

export const routes: Routes = [
  { path: ':type', component: VideoComponent },
  { path: '', component: VideoComponent },
];

export const videoPreviewRouting: ModuleWithProviders = RouterModule.forChild(routes);
