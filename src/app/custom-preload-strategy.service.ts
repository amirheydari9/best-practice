import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrategyService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const loadRoute = (delay) => delay > 0 ? timer(delay * 1000).pipe(map(() => load())) : load();
    if (route.data && route.data.preload) {
      const delay = route.data.loadAfterSeconds ? route.data.loadAfterSeconds : 0;
      return loadRoute(delay);
    }
    return of(null);

    // const connection = navigator.connection;
    //   if (connection.saveData) {
    //     return of(null);
    //   }
    //   const speed = connection.effectiveType;
    //   const slowConnections = ['slow-2g', '2g'];
    //   if (slowConnections.includes(speed)) {
    //     return of(null);
    //   }
    //   return load();

  }
}
