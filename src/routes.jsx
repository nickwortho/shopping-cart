import App from './App';
import ErrorPage from './components/ErrorPage';
import ShopPage from './components/ShopPage';
import CartPage from './components/CartPage';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/shop',
        element: <ShopPage />,
    },
    {
        path: '/cart',
        element: <CartPage />,
    },
];

export default routes;
