import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import {
    loadEquipments,
    equipmentsLoaded,
    equipmentsLoadError,
} from '../reducer';

const equipmentsEpic = actions$ => actions$.pipe(
    ofType(loadEquipments),
    mergeMap(() => ajax.getJSON('https://wger.de/api/v2/equipment?limit=1000').pipe(
        map(response => equipmentsLoaded([...response.results])),
        catchError(() => of(equipmentsLoadError(true))),
    )),
);


export default combineEpics(equipmentsEpic);
