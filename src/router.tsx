import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "./App";

import Login from "./pages/Auth/pages/Login/Login";
import Register from "./pages/Auth/pages/Register/Register";
import AuthLayout from "./components/AuthLayout/AuthLayout";

import NotFound from "./pages/NotFound/NotFound";

import Home from "./pages/Home/Home";
import Dictionary from "./pages/Dictionary/Dictionary";
import Missions from "./pages/Missions/Missions";
import MissionList from "./components/Missions/components/MissionList";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        element: <Missions />,
        children: [
          {
            index: true,
            element: <Navigate to="all" replace />,
          },
          {
            path: "all",
            element: <MissionList category="all" />,
          },
          {
            path: "document",
            element: <MissionList category="document" />,
          },
          {
            path: "chat",
            element: <MissionList category="chat" />,
          },
          {
            path: "mail",
            element: <MissionList category="mail" />,
          },
        ],
      },

      {
        path: "feedback",
        element: <Feedback />,
        children: [
          {
            index: true,
            element: <Navigate to="all" replace />,
          },
          {
            path: "all",
            element: <MissionList category="all" />,
          },
          {
            path: "document",
            element: <MissionList category="document" />,
          },
          {
            path: "chat",
            element: <MissionList category="chat" />,
          },
          {
            path: "mail",
            element: <MissionList category="mail" />,
          },
        ],
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

  { path: "/occupation", element: <Occupation /> },
  { path: "/job", element: <Job /> },

  { path: "*", element: <NotFound /> },
]);

export default router;