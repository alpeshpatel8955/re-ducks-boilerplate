import React from 'react';
import { Link, Route } from 'react-router-dom';
import routes from '../../routes';

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </header>

        { routes.map(route => (
            <Route key={route.path} {...route} />
        )) }

        <footer>
            I`m the footer, I am on every page.
        </footer>
    </div>
);

export default App;
