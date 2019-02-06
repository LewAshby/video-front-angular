import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Video } from '../models/video.model';
import { Comment } from '../models/comment.model';
import 'rxjs/Rx';

@Injectable()
export class VideoService {

  private url = 'http://localhost:1337';

  // menu
  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  // comments
  obsComments: Observable<Comment[]>;
  private comments: BehaviorSubject<Comment[]>;
  private dataComments: {
    comments: Comment[]
  };

  private videoId: string;


  constructor(public http: Http) {
    this.dataComments = { comments: [] };
    this.comments = <BehaviorSubject<Comment[]>>new BehaviorSubject([]);
    this.obsComments = this.comments.asObservable();
  }

  public getUrl(): string {
    return this.url;
  }

  public getVideoId(): string {
    return this.videoId;
  }

  public getVideoAll(): Observable<Video[]> {
    return this.http.get(`${this.url}/get_videosAll`)
      .map((response: Response) => {
        return (<any>response.json())['videos'].map(item => {
          return new Video(item);
        });
      })
      .catch(this._errorHandler);
  }

  public getVideoByName(name: string): Observable<Video> {
    return this.http.get(`${this.url}/get_videoByName?name=${name}`)
      .map((response: Response) => {
         // return new Video((<any>response.json())['requestedVideo']);
         this.dataComments.comments = (<any>response.json())['requestedVideo']['commentsList'];
         this.comments.next(Object.assign({}, this.dataComments).comments);
         this.videoId = (<any>response.json())['requestedVideo']['id'];
         return (<any>response.json())['requestedVideo'];
      })
      .catch(this._errorHandler);
  }

  public getCantComments(): number {
    return this.dataComments.comments.length;
  }

  /*public getVideoComments(video: string): Observable<Comment[]> {
    return this.http.get(`http://localhost/Angular/canalUO/src/app/video/sql_connection/get_videoComments.php?video="${video}"`)
      .map((response: Response) => {
        return (<any>response.json()).map(item => {
          return new Comment(item);
        });
      });
  }*/

  public changeMenuType(type: string): void {
    this.emitChangeSource.next(type || 'principal');
  }

  public sendComment(comment: string) {

    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers, method: 'post' });

    this.http.post(`${this.url}/post_Comment`, comment, options)
      .map(response => response.json())
        .subscribe(data => {
          if ( data['success'] ===  true ) {
            console.log(new Comment(comment));
            this.dataComments.comments.push(new Comment(comment));
            this.comments.next(Object.assign({}, this.dataComments).comments);
          }
        });
  }

  public searchVideo(term: string): Observable<Video[]> {
    return this.http.get(`${this.url}/searchVideos?searchTerm=${term}`)
      .map((response: Response) => {
        return (<any>response.json())['videos'].map(item => {
          return new Video(item);
        });
      });
  }

  public getMostPoplular(): Observable<Video[]> {
    return this.http.get(`${this.url}/get_MostPopular`)
    .map((response: Response) => {
        return (<any>response.json())['videos'].map(item => {
          return new Video(item);
        });
      });
  }

  private _errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error || 'Server error');
  }
}
