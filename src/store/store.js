import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import reducer, { loadEquipments, loadExerciseCategories, loadExercises } from './reducer';
import exercisesEpic from './epics/exercies';
import exerciseCategoriesEpic from './epics/exerciseCategories';
import equipmentsEpic from './epics/equipments';

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

const rootEpic = combineEpics(exercisesEpic, exerciseCategoriesEpic, equipmentsEpic);
epicMiddleware.run(rootEpic);

store.dispatch(loadExercises(true));
store.dispatch(loadExerciseCategories(true));
store.dispatch(loadEquipments(true));

export default store;
