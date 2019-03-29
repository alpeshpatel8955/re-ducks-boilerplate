import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './views/layouts/app';
import configureStore from './state/store';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const Main = () => (
    <ReduxProvider store={reduxStore}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>
);
export default Main;
