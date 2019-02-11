import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoService } from '../../../../services/video.service';
import { Video } from '../../../../models/video.model';


@Component({
  selector: 'uo-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  search: FormGroup;
  searchResults: Video[];

  constructor(private fb: FormBuilder, private videoService: VideoService, private route: Router, private elem: ElementRef) {
    this.search = fb.group({
      'searchTerm': ''
    });
  }

  ngOnInit() {
    this.search.valueChanges
      .subscribe(search => {
        this.videoService.searchVideo(search['searchTerm'], "preview")
          .subscribe(result => {
            // console.log(result);
            this.searchResults = result;
          });
    });
  }

  onSubmit(term: string): void {
    /*console.log('Buscar:  ' + term['searchTerm']);
  	this.videoService.searchVideo(term['searchTerm'])
      .subscribe(vids => {
        console.log(vids);
      });*/
    this.search.reset();
    if (term['searchTerm'] !== null && term['searchTerm'] !== '') {
      this.route.navigate(['/search', term['searchTerm']]);
    }
  }

  toggleMenu() {
    console.log('click!!');
    console.log(this.elem.nativeElement.querySelector('#wrapper'));
  }

  clearSearch() {
    this.search.reset();
  }

}
