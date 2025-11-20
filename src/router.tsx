import { createBrowserRouter } from 'react-router';
import App from './App';
import Login from './pages/Auth/pages/Login/Login';
import Register from './pages/Auth/pages/Register/Register';
import AuthLayout from './components/AuthLayout/AuthLayout';
import NotFound from './pages/NotFound/NotFound';
import Dictionary from './pages/Dictionary/Dictionary';
import Occupation from './pages/Occupation/Occupation';
import Job from './pages/Job/Job';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dict',
        element: <Dictionary />
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
    path: '/occupation',
    element: <Occupation />,
  },
  {
    path: '/job',
    element: <Job />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },

  
]);

export default router;
