import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WorldDto, WorldPositionDto} from './world-field.model';
import {catchError} from 'rxjs/operators';
import {Observable, Observer, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldFieldService {

  constructor(private http: HttpClient) {
  }

  getWorld(): Observable<WorldDto> {
    return new Observable((observer: Observer<any>) => {
      const eventSource = new EventSource('/api/backend/world');
      eventSource.onmessage = (event: MessageEvent) => {
        const worldDto: WorldDto = JSON.parse(event.data);
        observer.next(worldDto);
      };
      eventSource.onerror = (error) => observer.error('eventSource.onerror: ' + error);
      return () => eventSource.close();
    });
  }

  setCells(worldPositionDtos: WorldPositionDto[]) {
    return this.http.put('/api/backend/world', worldPositionDtos).pipe(
      catchError(err => throwError('Something bad happened; please try again later.')));
  }
}
