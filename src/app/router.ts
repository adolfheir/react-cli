import { createLoadable } from '@components/CreateLoadable/index';
import NotFound from '@pages/notFound';

const Home = createLoadable(() => import(/* webpackChunkName: "home" */ '@pages/home/index'));
const Map = createLoadable(() => import(/* webpackChunkName: "home" */ '@pages/mapTest/index'));

const router = [
 
    {
        exact: true,
        path: '/map',
        page: Map,
    },
    {
        exact: true,
        path: '/',
        page: Home,
    },
    {
        page: NotFound,
    },
];

export default router;
