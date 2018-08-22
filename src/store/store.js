import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import reducer, { loadExercises } from './reducer';
import exercisesEpic from './epics/exercies';

const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

const rootEpic = combineEpics(exercisesEpic);
epicMiddleware.run(rootEpic);

store.dispatch(loadExercises(true));

export default store;
