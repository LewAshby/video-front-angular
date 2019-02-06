import { addImportToModule } from '@angular/cli/lib/ast-tools';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { LayoutComponent } from 'app/core/layout/layout.component';
import { VideoService } from '../app/services/video.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule
  ],
  providers: [VideoService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
