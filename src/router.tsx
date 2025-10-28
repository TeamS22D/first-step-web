import { createBrowserRouter } from 'react-router';
import App from './App';
import Login from './pages/Auth/pages/Login/Login';
import Register from './pages/Auth/pages/Register/Register';
import AuthLayout from './components/AuthLayout/AuthLayout';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dict',
        element: <p>딕셔너리 페이지</p>
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
    ]
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

export default router;
