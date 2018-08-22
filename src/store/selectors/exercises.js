import { createSelector } from 'reselect';

export const getExercises = state => state.exercises;

export const exercisesSelector = createSelector(getExercises, exercises => exercises);
