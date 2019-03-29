import { Home, ProductDetails, ProductList } from '../views/pages';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/products',
        component: ProductList,
        exact: true,
    },
    {
        path: '/products/:permalink',
        example: '/products/apple',
        component: ProductDetails,
        exact: true,
    },
];

export default routes;
