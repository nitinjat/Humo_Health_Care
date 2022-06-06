import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AppComponent } from './../app.component';
import { CommonCls, ApisUrls } from './../Utilities/CommonCls';
@Injectable({
  providedIn: 'root'
})
export class AdminsevicesService {
  commonRequestObj: any = {};
  constructor(private http: HttpClient, private CommonObj: CommonCls) { }

  error: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // POST
  // CreateBug(data): Observable<CommonCls> {
  //   return this.http
  //     .post<CommonCls>(
  //       this.baseurl + '/bugtracking/',
  //       JSON.stringify(data),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.errorHandl));
  // }
  // // GET
  // GetIssue(id): Observable<CommonCls> {
  //   return this.http
  //     .get<CommonCls>(this.baseurl + '/bugtracking/' + id)
  //     .pipe(retry(1), catchError(this.errorHandl));
  // }
  // // GET
  // GetIssues(): Observable<Bug> {
  //   return this.http
  //     .get<Bug>(this.baseurl + '/bugtracking/')
  //     .pipe(retry(1), catchError(this.errorHandl));
  // }
  // // PUT
  // UpdateBug(id, data): Observable<Bug> {
  //   return this.http
  //     .put<Bug>(
  //       this.baseurl + '/bugtracking/' + id,
  //       JSON.stringify(data),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.errorHandl));
  // }

  // errorHandl(error) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // } https://www.positronx.io/angular-httpclient-http-tutorial-build-consume-restful-api/
  body(value: any) {
    return value;
  }
  AddUser(commonRequestObj: any): Observable<any> {
    return this.http.post(this.CommonObj.apiUrls.PostUser, commonRequestObj, this.httpOptions);
  }
}



