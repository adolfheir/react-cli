import { createLoadable } from '@components/CreateLoadable/index';
// import NotFound from '@pages/notFound/index';

const Home = createLoadable(() => import(/* webpackChunkName: "home" */'@pages/home/index.js'));

const router = [
  // {
  //   exact: true,
  //   path: '/',
  //   page: Home,
  // },
  {
    page: Home,
  },
];

export default router;
