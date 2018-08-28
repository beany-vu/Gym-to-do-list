import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import {
    loadExercises,
    exercisesLoaded,
    exercisesLoadError,
} from '../reducer';

const exercisesEpic = actions$ => actions$.pipe(
    ofType(loadExercises),
    mergeMap(() => ajax.getJSON('https://wger.de/api/v2/exercise?limit=1000').pipe(
        map(response => exercisesLoaded([...response.results])),
        catchError(() => of(exercisesLoadError(true))),
    )),
);


export default combineEpics(exercisesEpic);
