import { RouteProps } from 'react-router-dom';
import Home from '../pages/home/Home';
import Account from '../pages/auth/account/Account';
import Signin from '../pages/auth/signin/Signin';
import Signout from '../pages/auth/signout/Signout';
import Forum from '../pages/forum/Forum';

export const routes: RouteProps[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signout',
    element: <Signout />,
  },
  {
    path: '/j/:forumId',
    element: <Forum />,
  },
];
