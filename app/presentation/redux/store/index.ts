import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {createLogger} from 'redux-logger';
import { rootEpic } from '../epics';
import { rootReducer } from '../reducers';

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__? : typeof compose;
//     }
// }


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMidleware = createEpicMiddleware();

export const configureStore = () => {
    const middleware: any = [epicMidleware];
    if(__DEV__){
        middleware.push(createLogger);
    }
    const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
    epicMidleware.run(rootEpic);
    return store;
} 