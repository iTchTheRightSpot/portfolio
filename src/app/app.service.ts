import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  protected readonly http = inject(HttpClient);

  readonly emit = (name: string) =>
    this.http
      .post<HttpResponse<number>>(`https://portfolio-api.emmanueluluabuike.workers.dev?name=${name}`, {})
      .pipe(
        map(res => res.status),
        catchError(err => of(err.status || 400))
      );
}