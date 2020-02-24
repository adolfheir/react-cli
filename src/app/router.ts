import { createLoadable } from '@components/CreateLoadable/index';
import NotFound from '@pages/notFound';

const Home = createLoadable(() => import(/* webpackChunkName: "home" */ '@pages/home/index'));

const router = [
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
