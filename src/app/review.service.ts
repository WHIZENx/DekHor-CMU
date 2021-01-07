import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url = 'http://localhost:3000/review';

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient
  ) { }

  getReviewList(): Observable<Review[]> {
    return this.http.get<Review[]>(this.url).pipe(
      tap(_ => console.log('Get guest list')),
      catchError(this.handleError<Review[]>([]))
    );
  }

  getReview(id: number): Observable<Review> {
    const idUrl = `${this.url}/${id}`;
    return this.http.get<Review>(idUrl).pipe(
      tap(_ => console.log(`Get guest id=${id}`)),
      catchError(this.handleError<Review>())
    );
  }

  updateReview(guest: Review): Observable<any> {
    const idUrl = `${this.url}/${guest.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.put(idUrl, guest, httpOptions).pipe(
      tap(_ => console.log(`Updated guest id=${guest.id}`)),
      catchError(this.handleError<any>())
    );
  }

  deleteReview(id: number): Observable<Review> {
    const idUrl = `${this.url}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.delete<Review>(idUrl, httpOptions).pipe(
      tap(_ => console.log(`Deleted guest id=${id}`)),
      catchError(this.handleError<Review>())
    );
  }

  addReview(guest: Review): Observable<Review> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.post<Review>(this.url, guest, httpOptions).pipe(
      tap((newGuest: Review) => console.log(`Added wish w/ id=${newGuest.id}`)),
      catchError(this.handleError<Review>())
    );
  }
}
