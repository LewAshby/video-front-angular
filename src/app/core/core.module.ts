import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './layout/menu/top-bar/top-bar.component';
import { SideBarComponent } from './layout/menu/side-bar/side-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { mainRouting } from './core.routes';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    mainRouting,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TopBarComponent, SideBarComponent, LayoutComponent, MainContentComponent],
  exports: [LayoutComponent]
})
export class CoreModule { }
