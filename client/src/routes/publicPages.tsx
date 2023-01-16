import { lazy } from 'react';
import Loadable from '../components/Loadable';
import BasicLayout from '../layouts/basic';

const Home = Loadable(lazy(() => import('../views/Home')));

export const PublicPages = {
  path: '/',
  element: <BasicLayout />,
  children: [{ path: '/', element: <Home /> }],
};
