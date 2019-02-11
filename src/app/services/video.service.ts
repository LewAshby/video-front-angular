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

  private url = 'http://127.0.0.1:8000';
  private assets = 'http://127.0.0.1';

  private countResult: string;
  private currentPage: string;
  private nextPage: string;
  private previousPage: string;
  

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

  public getAssets(): string {
    return this.assets;
  }

  public getVideoId(): string {
    return this.videoId;
  }

  public getVideoAll(): Observable<Video[]> {
    return this.http.get(`${this.url}/api/video/all`)
      .map((response: Response) => {
        return (<any>response.json())['results'].map(item => {
          return new Video(item);
        });
      })
      .catch(this._errorHandler);
  }

  public getVideoAllByType(video_type: string): Observable<Video[]> {
    return this.http.get(`${this.url}/api/video/all/${video_type}`)
      .map((response: Response) => {
        return (<any>response.json())['results'].map(item => {
          return new Video(item);
        });
      })
      .catch(this._errorHandler);
  }

  public getVideoByName(name: string): Observable<Video> {
    return this.http.get(`${this.url}/api/video/all/${name}`)
      .map((response: Response) => {
         // return new Video((<any>response.json())['requestedVideo']);
         this.dataComments.comments = (<any>response.json())['comments'];
         this.comments.next(Object.assign({}, this.dataComments).comments);
         this.videoId = (<any>response.json())['id'];
         return (<any>response.json());
      })
      .catch(this._errorHandler);
  }

  public getCantComments(): number {
    return this.dataComments.comments.length;
  }

  public changeMenuType(type: string): void {
    this.emitChangeSource.next(type || 'principal');
  }

  public sendComment(comment: string) {

    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers, method: 'post' });

    this.http.post(`${this.url}/api/video/comment/`, comment, options)
      .map(response => response.json())
        .subscribe(data => {
          if ( data['success'] ===  true ) {
            console.log(new Comment(comment));
            this.dataComments.comments.push(new Comment(comment));
            this.comments.next(Object.assign({}, this.dataComments).comments);
          }
        });
  }

  public getCountResult() {
    return this.countResult;
  }

  public getCurrentPage() {
    return this.currentPage
  }

  public setCurrentPage(url: string) {
    this.currentPage = url;
  }

  public getPreviousPage() {
    return this.previousPage
  }

  public setPreviousPage(url: string) {
    this.previousPage = url;
  }

  public getNextPage() {
    return this.nextPage;
  }

  public set setNextPage(url: string) {
    this.nextPage = url;
  }

  public searchVideo(term: string, request_type: string): Observable<Video[]> {
    if (term != ' '){
      if (request_type === "preview"){
        return this.http.get(`${this.url}/api/video/all/searchpreview/${term}`)
        .map((response: Response) => {
          return (<any>response.json())['results'].map(item => {
            return new Video(item);
          });
        });
      }
      else if (request_type === "all") {
        return this.http.get(`${this.url}/api/video/all/search/${term}`)
        .map((response: Response) => {
          this.countResult = <any>response.json()['count'];
          this.previousPage = <any>response.json()['previous'];
          this.nextPage = <any>response.json()['next'];
          return (<any>response.json())['results'].map(item => {
            return new Video(item);
          });
        });
      }
      else if (request_type === "previous") {
        return this.http.get(`${this.previousPage}`)
        .map((response: Response) => {
          this.countResult = <any>response.json()['count'];
          this.previousPage = <any>response.json()['previous'];
          this.nextPage = <any>response.json()['next'];
          return (<any>response.json())['results'].map(item => {
            return new Video(item);
          });
        });
      }
      else if (request_type === "next") {
        return this.http.get(`${this.nextPage}`)
        .map((response: Response) => {
          this.countResult = <any>response.json()['count'];
          this.previousPage = <any>response.json()['previous'];
          this.nextPage = <any>response.json()['next'];
          return (<any>response.json())['results'].map(item => {
            return new Video(item);
          });
        });
      }
    }
  }

  public getMostPoplular(): Observable<Video[]> {
    return this.http.get(`${this.url}/api/video/all/popular`)
    .map((response: Response) => {
        return (<any>response.json())['results'].map(item => {
          return new Video(item);
        });
      });
  }

  private _errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error || 'Server error');
  }
}
