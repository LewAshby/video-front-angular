import { searchResultRouting } from './search-result.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';

@NgModule({
  imports: [
    CommonModule,
    searchResultRouting
  ],
  declarations: [ResultComponent],
  exports: [ResultComponent]
})
export class SearchResultModule { }
