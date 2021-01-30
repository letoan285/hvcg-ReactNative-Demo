import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import {
  INIT_APP,
  GET_ALL,
  initApplicationSuccess,
  initApplicationFailed,
} from '../../../actions/general/appInitiation';
import InitAppUseCase from '../../../../../domain/usecases/general/appInitation';
import CustomerRepository from '../../../../../data/repository/customer';

export const initAppEpic = (action$: any): any =>
  action$.pipe(
    ofType(INIT_APP),
    exhaustMap(() => {
      return new Observable((obs) => {
        const usecase = new InitAppUseCase();
        usecase
          .execute()
          .then(() => {
            obs.next(initApplicationSuccess());
            obs.complete();
          })
          .catch((error) => {
            obs.next(initApplicationFailed(error.toString()));
            obs.complete();
          });
      });
    })
  );

export const getAllEpic = (action$: any): any => {
  action$.pipe(
    ofType(GET_ALL),
    exhaustMap(() => {
      return new Observable((obs) => {
        const repo = new CustomerRepository();
        repo
          .getUser()
          .then((accessToken: any) => {
            obs.next([accessToken]);
            obs.complete();
          })
          .catch(() => {
            obs.complete();
          });
      });
    })
  );
};
