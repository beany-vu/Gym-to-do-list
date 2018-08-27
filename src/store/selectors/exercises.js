import { createSelector } from 'reselect';
import { getExerciseCategories } from './exerciseCategories';

// const exerciseCategories = exercisesCategoriesSelector;
// console.log(exerciseCategories)
export const getExercises = state => state.exercises;
export const exercisesSelector = createSelector(getExercises, getExerciseCategories,
    (exercises, cat) => exercises.map(r => {
        if(cat !== undefined) {
            console.log(cat.find(item => item.id === +r.category))
            return {
                ...r,
                category: cat.find(item => item.id === +r.category).name,
            };
        }
        return r;
    }));
