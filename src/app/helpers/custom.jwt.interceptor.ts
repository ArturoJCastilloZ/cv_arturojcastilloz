import { HttpResponse, type HttpEvent, type HttpHandler, type HttpInterceptor, type HttpRequest } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { DispatcherServices } from '@Services/dispatchers.service';
import { tap } from 'rxjs';

@Injectable()
export class CustomJwtInterceptor implements HttpInterceptor {

    private readonly _DESTROYREF = inject(DestroyRef);
    private readonly _DISPATCH = inject(DispatcherServices);

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req).pipe(
            tap({
                next: (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        if (event.status === 200) {
                            this._DISPATCH.SHOW_SPINNER(false);
                        } else {
                            this._DISPATCH.SHOW_SPINNER(false);
                            // TODO: Poner un mensaje para mostrar el error o el mensaje que se recibe.
                        }
                    }
                }
            })
        )
    }
}