import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "./App";
import Login from "./pages/Auth/pages/Login/Login";
import Register from "./pages/Auth/pages/Register/Register";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Dictionary from "./pages/Dictionary/Dictionary";
import Missions from "./pages/Missions/Missions";
import Feedback from "./pages/Feedback/Feedback";
import Occupation from "./pages/Occupation/Occupation";
import Job from "./pages/Job/Job";
import Profile from "./pages/Profile/Profile";
import MissionLayout from "./components/MissionLayout/MissionLayout.tsx";
import Document from './pages/Mission/pages/Commitment/Document/Document.tsx'
import Mail from "./pages/Mission/pages/Commitment/Mail/Mail.tsx";
import Chat from "./pages/Mission/pages/Commitment/Chat/Chat.tsx";
import MissionFeedback from './pages/Mission/pages/MissionFeedback/MissionFeedback.tsx'
import MissionComplete from "./pages/Mission/pages/MissionComplete/MissionComplete.tsx";
import Verify from "./pages/Auth/pages/Verify/Verify";
import SocialLogin from "./pages/Auth/pages/SocialLogin/SocialLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />
      },
      {
        path: "home",
        element: <Home />,
      },

      {
        path: "dict",
        element: <Dictionary />,
      },

      {
        path: "mission",
        element: <Navigate to="all" replace />,
      },
      {
        path: "mission/:category",
        element: <Missions />,
      },

      {
        path: "feedback",
        element: <Navigate to="all" replace />,
      },
      {
        path: "feedback/:category",
        element: <Feedback />,
      },
      {
        path: 'performance',
        element: <MissionLayout />,
        children: [
          {
            path: 'document',
            element: <Document />,
          },
          {
            path: 'mail',
            element: <Mail/>,
          },
          {
            path: 'chat',
            element: <Chat/>,
          }
        ]
      },
      {
        path: "missionfeedback",
        element: <MissionFeedback />,
      },
      {
        path: "missioncomplete",
        element: <MissionComplete />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
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

  { path: "/verify", element: <Verify /> },

  { path: "/login-success", element: <SocialLogin /> },

  { path: "/occupation", element: <Occupation /> },
  { path: "/job", element: <Job /> },

  { path: "*", element: <NotFound /> },
]);

export default router;