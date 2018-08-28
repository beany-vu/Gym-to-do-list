import { createSelector } from 'reselect';
import { getExerciseCategories } from './exerciseCategories';
import { equipmentsSelector } from './equipments';


export const getExercises = state => state.exercises;
export const exercisesSelector = createSelector(
    getExercises,
    getExerciseCategories,
    equipmentsSelector,
    (exercises, cat, equipments) => exercises.map(r => ({
        ...r,
        category: cat.length > 0 ? cat.find(item => item.id === +r.category).name : 'Loading',
        equipment: (Object.keys(equipments).length > 0)
            ? r.equipment.map(i => equipments[i].name).join(', ') : 'Loading',
    })),
);
