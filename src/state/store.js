import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/reducers';
import rootSaga from './ducks/sagas';
import { createLogger } from './middlewares';

const configureStore = (initialState) => {
    // Saga middleware
    const sagaMiddleware = createSagaMiddleware();

    // ==================================== ==================
    // Middleware Configuration
    // ======================================================
    const middleware = [createLogger(true), sagaMiddleware];

    // enable redux devtools... can this be done with Webpack instead?
    const enhancers = compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f,
        applyMiddleware(...middleware),
    );

    const store = createStore(rootReducer, initialState, enhancers);

    // Running saga middleware
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
