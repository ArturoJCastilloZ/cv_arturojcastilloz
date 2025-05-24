import {
    GET_ABOUT,
    GET_ABOUT_ERROR,
    GET_ABOUT_SUCCESS,
    GET_HEADERS,
    GET_HEADERS_ERROR,
    GET_HEADERS_SUCCESS,
    GET_HERO,
    GET_HERO_ERROR,
    GET_HERO_SUCCESS,
    GET_IMAGES,
    GET_IMAGES_ERROR,
    GET_IMAGES_SUCCESS,
    GET_JOBS,
    GET_JOBS_ERROR,
    GET_JOBS_SUCCESS,
    GET_STUDIES,
    GET_STUDIES_ERROR,
    GET_STUDIES_SUCCESS
} from "@Actions/global.actions";
import { inject, Injectable } from "@angular/core";
import { environment } from "@Environments/environment";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { HttpService } from "@Services/http.service";
import { catchError, map, of, switchMap, tap } from "rxjs";

@Injectable()
export class AdjczEffects {
    private readonly _ACTIONS = inject(Actions);
    private readonly _STORE = inject(Store<any>);
    private readonly _HTTP = inject(HttpService);

    GET_HERO$ = createEffect(() => this._ACTIONS.pipe(
        ofType(GET_HERO),
        switchMap((params) => this._HTTP.GET(`${environment.apiUrl}/hero`).pipe(
            map((response) => GET_HERO_SUCCESS({ response })),
            catchError((error) => of(GET_HERO_ERROR({ error })))
        ))
    ));

    GET_HERO_ERROR$ = createEffect(() => {
        return this._ACTIONS.pipe(
            ofType(GET_HERO_ERROR),
            tap((action) => {
                console.log(action.error)
            })
        )
    }, {dispatch: false});

    GET_HEADERS$ = createEffect(() => this._ACTIONS.pipe(
        ofType(GET_HEADERS),
        switchMap((params) => this._HTTP.GET(`${environment.apiUrl}/header`).pipe(
            map((response) => GET_HEADERS_SUCCESS({ response })),
            catchError((error) => of(GET_HEADERS_ERROR({ error })))
        ))
    ));

    GET_HEADERS_ERROR$ = createEffect(() => {
        return this._ACTIONS.pipe(
            ofType(GET_HEADERS_ERROR),
            tap((action) => {
                console.log(action.error)
            })
        )
    }, {dispatch: false});

    GET_ABOUT$ = createEffect(() => this._ACTIONS.pipe(
        ofType(GET_ABOUT),
        switchMap((params) => this._HTTP.GET(`${environment.apiUrl}/about`).pipe(
            map((response) => GET_ABOUT_SUCCESS({ response })),
            catchError((error) => of(GET_ABOUT_ERROR({ error })))
        ))
    ));

    GET_ABOUT_ERROR$ = createEffect(() => {
        return this._ACTIONS.pipe(
            ofType(GET_ABOUT_ERROR),
            tap((action) => {
                console.log(action.error)
            })
        )
    }, {dispatch: false});

    GET_IMAGES$ = createEffect(() => this._ACTIONS.pipe(
        ofType(GET_IMAGES),
        switchMap((params) => this._HTTP.GET(`${environment.apiUrl}/images`).pipe(
            map((response) => GET_IMAGES_SUCCESS({ response })),
            catchError((error) => of(GET_IMAGES_ERROR({ error })))
        ))
    ));

    GET_IMAGES_ERROR$ = createEffect(() => {
        return this._ACTIONS.pipe(
            ofType(GET_IMAGES_ERROR),
            tap((action) => {
                console.log(action.error)
            })
        )
    }, {dispatch: false});

    GET_STUDIES$ = createEffect(() => this._ACTIONS.pipe(
        ofType(GET_STUDIES),
        switchMap((params) => this._HTTP.GET(`${environment.apiUrl}/studies`).pipe(
            map((response) => GET_STUDIES_SUCCESS({ response })),
            catchError((error) => of(GET_STUDIES_ERROR({ error })))
        ))
    ));

    GET_STUDIES_ERROR$ = createEffect(() => {
        return this._ACTIONS.pipe(
            ofType(GET_STUDIES_ERROR),
            tap((action) => {
                console.log(action.error)
            })
        )
    }, {dispatch: false});

    GET_JOBS$ = createEffect(() => this._ACTIONS.pipe(
        ofType(GET_JOBS),
        switchMap((params) => this._HTTP.GET(`${environment.apiUrl}/jobs`).pipe(
            map((response) => GET_JOBS_SUCCESS({ response })),
            catchError((error) => of(GET_JOBS_ERROR({ error })))
        ))
    ));

    GET_JOBS_ERROR$ = createEffect(() => {
        return this._ACTIONS.pipe(
            ofType(GET_JOBS_ERROR),
            tap((action) => {
                console.log(action.error)
            })
        )
    }, {dispatch: false});
}