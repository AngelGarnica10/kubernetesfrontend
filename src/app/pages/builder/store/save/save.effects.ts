import { Injectable } from '@angular/core';
import * as fromActions from './save.actions'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from '@app/services';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { BuildingCreateRequest, BuildingResponse } from "./save.models";
import { environment } from 'environments/environment';

type Action = fromActions.All;

@Injectable()
export class SaveEffects {
  constructor(
    private actions: Actions,
    private httpClient: HttpClient,
    private router: Router,
    private notification: NotificationService
  ){}

  create: Observable<Action> = createEffect( () =>
    this.actions.pipe(
      ofType( fromActions.Types.CREATE ),
      map( (action: fromActions.Create) => action.building ),
      switchMap( (request: BuildingCreateRequest) =>
        this.httpClient.post<BuildingResponse>(`${environment.url}api/buildings`, request)
        .pipe(
          delay(1000),
          tap((response: BuildingResponse) => {
            this.router.navigate(['buildings/list']);
          }),
          map((response: BuildingResponse) => new fromActions.CreateSuccess(response)),
          catchError(err => {
            this.notification.error(`Errores al guardar el inmueble`);
            return of(new fromActions.CreateError(err.message));
          })
        )
      )
    )
  );

  read: Observable<Action> = createEffect( () =>
    this.actions.pipe(
      ofType( fromActions.Types.READ ),
      switchMap( () =>
        this.httpClient.get<BuildingResponse[]>(`${environment.url}api/buildings`)
        .pipe(
          delay(1000),
          map((response: BuildingResponse[]) => new fromActions.ReadSuccess(response)),
          catchError(err => {
            this.notification.error(`Ocurrio un error al obtener los inmuebles`);
            return of(new fromActions.ReadError(err.message));
          })
        )
      )
    )
  );
}
