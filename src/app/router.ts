import { createLoadable } from '@components/CreateLoadable/index';
import NotFound from '@pages/notFound';

const Home = createLoadable(() => import(/* webpackChunkName: "home" */ '@pages/home/index'));
const Map = createLoadable(() => import(/* webpackChunkName: "map" */ '@pages/mapTest/index'));
const SnopList = createLoadable(() => import(/* webpackChunkName: "snopList" */ '@pages/snopList/index'));
const Contact = createLoadable(() => import(/* webpackChunkName: "concat" */ '@pages/contact/index'));
const Detail = createLoadable(() => import(/* webpackChunkName: "detail" */ '@pages/detail/index'));

const router = [
    {
        exact: true,
        path: '/map',
        page: Map,
    },
    {
        exact: true,
        path: '/detail',
        page: Detail,
    },
    {
        exact: true,
        path: '/snop',
        page: SnopList,
    },
    {
        exact: true,
        path: '/concat',
        page: Contact,
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
