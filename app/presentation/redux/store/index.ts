import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {createLogger, logger} from 'redux-logger';
import { rootEpic } from '../epics';
import { rootReducer } from '../reducers';

const epicMidleware = createEpicMiddleware();

export const configureStore = () => {
    const middleware: any = [epicMidleware];
    if(__DEV__){
        middleware.push(logger);
    }
    const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
    epicMidleware.run(rootEpic);
    return store;
} 