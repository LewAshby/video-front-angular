import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ContainerPlayComponent } from './container-play.component';


// Video-Play Route Configuration

export const routes: Routes = [
  { path: ':video', component: ContainerPlayComponent },
  { path: '', redirectTo: '/main' }
];

export const videoPlayRouting: ModuleWithProviders = RouterModule.forChild(routes);
