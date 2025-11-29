<<<<<<< HEAD
import { createBrowserRouter, Navigate } from 'react-router';
import App from './App';
import Login from './pages/Auth/pages/Login/Login';
import Register from './pages/Auth/pages/Register/Register';
import AuthLayout from './components/AuthLayout/AuthLayout';
import NotFound from './pages/NotFound/NotFound';
import Dictionary from './pages/Dictionary/Dictionary';
import Home from './pages/Home/Home';
import Missions from './pages/Missions/Missions';
import MissionList from './components/Missions/components/MissionList';
import Feedback from './pages/Feedback/Feedback';
=======
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Auth/pages/Login/Login";
import Register from "./pages/Auth/pages/Register/Register";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import NotFound from "./pages/NotFound/NotFound";
import Dictionary from "./pages/Dictionary/Dictionary";
import Occupation from "./pages/Occupation/Occupation";
import Job from "./pages/Job/Job";
import Profile from "./pages/Profile/Profile";
>>>>>>> profile

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
<<<<<<< HEAD
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
        element: <Missions />,
        children: [
          {
            index: true,
            element: <Navigate to="all" replace />,
          },
          {
            path: 'all',
            element: <MissionList category='all'/>
          },
          {
            path: 'document',
            element: <MissionList category='document'/>
          },
          {
            path: 'chat',
            element: <MissionList category='chat'/>
          },
          {
            path: 'mail',
            element: <MissionList category='mail'/>
          },
        ]
      },
      {
        path: 'feedback',
        element: <Feedback />,
        children: [
          {
            index: true,
            element: <Navigate to="all" replace />,
          },
          {
            path: 'all',
            element: <MissionList category='all'/>
          },
          {
            path: 'document',
            element: <MissionList category='document'/>
          },
          {
            path: 'chat',
            element: <MissionList category='chat'/>
          },
          {
            path: 'mail',
            element: <MissionList category='mail'/>
          },
        ]
      },
=======
      { path: "dict", element: <Dictionary /> },
      { path: "profile", element: <Profile /> },
>>>>>>> profile
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
<<<<<<< HEAD
  {
    path: '/*',
    element: <NotFound />,
  },
=======
  { path: "/occupation", element: <Occupation /> },
  { path: "/job", element: <Job /> },
  { path: "/*", element: <NotFound /> },
>>>>>>> profile
]);

export default router;
