import {createAction, handleActions} from 'redux-actions';

export const loadExercises = createAction('exercises.loading');
export const exercisesLoaded = createAction('exercises.loaded');
export const exerciseLoadError = createAction('exercises.hasError');

export default handleActions(
    {
        [loadExercises]    : (state, {payload}) => ({
            ...state,
            status: {
                ...state.status,
                loading: true
            }
        }),
        [exercisesLoaded]  : (state, {payload}) => ({
           ...state,
            exercises: payload,
            status: {
               ...state.status,
                loading: false,
                hasError: false
            }
        }),
        [exerciseLoadError]: (state, {payload}) => ({
            ...state,
            status: {
                ...state.status,
                loading: false,
                hasError: payload
            }
        })
    },
    {
        exercises: [],
        status: {
            loading: false,
            hasError: false
        }
    }
)