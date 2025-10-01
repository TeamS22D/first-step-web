import { createBrowserRouter } from 'react-router';
import App from './App';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import AuthLayout from './components/AuthLayout/AuthLayout';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'mission',
        element: null,
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
