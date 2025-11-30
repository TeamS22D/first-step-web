import { createBrowserRouter } from 'react-router';
import App from './App';
import Login from './pages/Auth/pages/Login/Login';
import Register from './pages/Auth/pages/Register/Register';
import AuthLayout from './components/AuthLayout/AuthLayout';
import NotFound from './pages/NotFound/NotFound';
import Dictionary from './pages/Dictionary/Dictionary';
import Home from './pages/Home/Home';
import Feedback  from './pages/Mission/pages/Feedback/Feedback.tsx'
import Complete from './pages/Mission/pages/Complete/Complete.tsx'
import CommitmentLayout from './components/CommitmentLayout/CommitmentLayout.tsx';
import Document from './pages/Mission/pages/Commitment/Document/Document.tsx';
import Mail from './pages/Mission/pages/Commitment/Mail/Mail.tsx'
import Chat from './pages/Mission/pages/Commitment/Chat/Chat.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'dict',
        element: <Dictionary />
      },
      {
        path: 'mission',
        element: <CommitmentLayout />,
        children: [
          {
            path: 'document',
            element: <Document/>
          },
          {
            path: 'mail',
            element: <Mail/>
          },
          {
            path: 'chat',
            element: <Chat/>
          },
        ]
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
