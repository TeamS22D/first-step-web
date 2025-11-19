import { createBrowserRouter } from 'react-router';
import App from './App';
import Login from './pages/Auth/pages/Login/Login';
import Register from './pages/Auth/pages/Register/Register';
import AuthLayout from './components/AuthLayout/AuthLayout';
import NotFound from './pages/NotFound/NotFound';
import Dictionary from './pages/Dictionary/Dictionary';
import Commitment from './pages/Mission/pages/Commitment/Commitment.tsx';
import Feedback from './pages/Mission/pages/Feedback/Feedback.tsx';
import Complete from './pages/Mission/pages/Complete/Complete.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dict',
        element: <Dictionary />
      },
      {
        path: 'mission',
        element: <Commitment />
      },
      {
        path: 'feedback',
        element: <Feedback />
      },
      {
        path: 'complete',
        element: <Complete />
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
