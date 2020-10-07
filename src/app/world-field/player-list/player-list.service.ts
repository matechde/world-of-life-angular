import {Injectable} from '@angular/core';
import {Observable, Observer, throwError} from 'rxjs';
import {WorldDto} from '../world-field.model';
import {HttpClient} from '@angular/common/http';
import {PlayerLoginDto, PlayerPublicDto} from './player.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerListService {

  constructor(private http: HttpClient) {
  }

  getPlayers(): Observable<PlayerPublicDto[]> {
    return new Observable((observer: Observer<any>) => {
      const eventSource = new EventSource('/api/backend/players');
      eventSource.onmessage = (event: MessageEvent) => {
        const playerPublicDtos: PlayerPublicDto[] = JSON.parse(event.data);
        observer.next(playerPublicDtos);
      };
      eventSource.onerror = (error) => observer.error('eventSource.onerror: ' + error);
      return () => eventSource.close();
    });
  }

  login(playerLoginDto: PlayerLoginDto){
    return this.http.post('/api/backend/players', playerLoginDto).pipe(
      catchError(err => throwError('Something bad happened; please try again later.')));
  }
}
