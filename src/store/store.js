import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import reducer, { loadExerciseCategories, loadExercises } from './reducer';
import exercisesEpic from './epics/exercies';
import exerciseCategoriesEpic from './epics/exerciseCategories';

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

const rootEpic = combineEpics(exercisesEpic, exerciseCategoriesEpic);
epicMiddleware.run(rootEpic);

store.dispatch(loadExercises(true));
store.dispatch(loadExerciseCategories(true));

export default store;
