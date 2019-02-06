
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


// Route Configuration

export const routes: Routes = [
  { path: 'main', loadChildren: './../video-preview/video-preview.module#VideoPreviewModule' },
  { path: 'video', loadChildren: './../video-play/video-play.module#VideoPlayModule' },
  { path: 'search', loadChildren: './../search-result/search-result.module#SearchResultModule' },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
];

export const mainRouting: ModuleWithProviders = RouterModule.forRoot(routes);

