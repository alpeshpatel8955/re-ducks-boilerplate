import * as React from 'react';
import * as ReactDOM from 'react-dom';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

import Main from './main';

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Main />
        </AppContainer>,
        document.getElementById('root'),
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./main', render);
}
