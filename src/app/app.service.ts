import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { environment } from '~env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  protected readonly http = inject(HttpClient);

  readonly emit = (name: string) =>
    this.http
      .post<HttpResponse<number>>(`${environment.domain}/${name}`, {})
      .pipe(
        map(res => res.status),
        catchError(err => of(err.status || 400))
      );
}
