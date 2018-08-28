import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
    mergeMap, map, catchError, delay,
} from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import {
    loadExerciseCategories,
    exerciseCategoriesLoaded,
    exerciseCategoriesLoadError,
} from '../reducer';

const exerciseCategoriesEpic = actions$ => actions$.pipe(
    ofType(loadExerciseCategories),

    mergeMap(() => ajax.getJSON('https://wger.de/api/v2/exercisecategory?limit=1000').pipe(
        delay(2000),
        map(response => exerciseCategoriesLoaded([...response.results])),
        catchError(() => of(exerciseCategoriesLoadError(true))),
    )),
);

export default combineEpics(exerciseCategoriesEpic);
