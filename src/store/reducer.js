import { createAction, handleActions } from 'redux-actions';

export const loadExercises = createAction('exercises.loading');
export const exercisesLoaded = createAction('exercises.loaded');
export const exercisesLoadError = createAction('exercises.hasError');
export const loadExerciseCategories = createAction('exerciseCategories.loading');
export const exerciseCategoriesLoaded = createAction('exerciseCategories.loaded');
export const exerciseCategoriesLoadError = createAction('exerciseCategories.hasError');
export const loadEquipments = createAction('equipment.loading');
export const equipmentsLoaded = createAction('equipment.loaded');
export const equipmentsLoadError = createAction('equipment.hasError');

export default handleActions(
    {
        [loadExercises]: (state, { payload }) => ({
            ...state,
            status: {
                ...state.status,
                exercises: {
                    loading: payload,
                },
            },
        }),
        [exercisesLoaded]: (state, { payload }) => ({
            ...state,
            exercises: payload,
            status: {
                ...state.status,
                exercises: {
                    loading: false,
                    hasError: false,
                },
            },
        }),
        [exercisesLoadError]: (state, { payload }) => ({
            ...state,
            status: {
                ...state.status,
                exercises: {
                    loading: false,
                    hasError: payload,
                },
            },
        }),
        [loadExerciseCategories]: (state, { payload }) => ({
            ...state,
            status: {
                ...state.status,
                exerciseCategories: {
                    loading: payload,
                },
            },
        }),
        [exerciseCategoriesLoaded]: (state, { payload }) => ({
            ...state,
            exerciseCategories: payload,
            status: {
                ...state.status,
                exerciseCategories: {
                    loading: false,
                    hasError: false,
                },
            },
        }),
        [exerciseCategoriesLoadError]: (state, { payload }) => ({
            ...state,
            status: {
                ...state.status,
                exerciseCategories: {
                    loading: false,
                    hasError: payload,
                },
            },
        }),
        [loadEquipments]: (state, { payload }) => ({
            ...state,
            status: {
                ...state.status,
                equipments: {
                    loading: payload,
                },
            },
        }),
        [equipmentsLoaded]: (state, { payload }) => ({
            ...state,
            equipments: payload,
            status: {
                ...state.status,
                equipments: {
                    loading: false,
                    hasError: false,
                },
            },
        }),
        [equipmentsLoadError]: (state, { payload }) => ({
            ...state,
            status: {
                ...state.status,
                equipments: {
                    loading: false,
                    hasError: payload,
                },
            },
        }),
    },
    {
        exercises: [],
        exerciseCategories: [],
        equipments: [],
        status: {
            exercises: {
                loading: false,
                hasError: false,
            },
            exerciseCategories: {
                loading: false,
                hasError: false,
            },
            equipments: {
                loading: false,
                hasError: false,
            },
        },
    },
);
