import { createSelector } from 'reselect';

export const getExerciseCategories = state => state.exerciseCategories;

export const exercisesCategoriesSelector = createSelector(
    getExerciseCategories, exerciseCategories => exerciseCategories.reduce(
        (accumulator, current) => {
            accumulator[current.id] = current;
            return accumulator;
        }, {},
    ),
);
