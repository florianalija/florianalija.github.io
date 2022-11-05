import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';

// routes
import Loadable from '../ui-component/Loadable';

const Home = Loadable(lazy(() => import('../views/pages/home')));
const Art = Loadable(lazy(() => import('../views/pages/art')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/art', element: <Art /> },
    { path: '/*', element: <Home /> },
  ]);
}
