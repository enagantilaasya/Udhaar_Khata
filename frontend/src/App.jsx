import React from "react";
import {
RouterProvider,
createBrowserRouter,
} from "react-router-dom";

import RootLayout from "./components/RootLayout";
import DashboardLayout from "./components/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CustomerDetails from "./pages/CustomerDetails";
import Transactions from "./pages/Transactions";
import Reminder from "./pages/Reminder";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking"
import NotFound from "./pages/NotFound";

function App() {

const router = createBrowserRouter([
{
path: "/",

  element: <RootLayout />,

  children: [
    {
      index: true,
      element: <Home />,
    },

    {
      path: "login",
      element: <Login />,
    },

    {
      path: "register",
      element: <Register />,
    },
  ],
},

{
  path: "/dashboard",

  element: <DashboardLayout />,

  children: [
    {
      index: true,
      element: <Dashboard />,
    },

    {
      path: "customers",
      element: <Customers />,
    },

    {
      path: "customer/:id",
      element: <CustomerDetails />,
    },

    {
      path: "transactions",
      element: <Transactions />,
    },

    {
      path: "reminder",
      element: <Reminder />,
    },

    {
      path: "ranking",
      element: <Ranking />,
    },

    {
      path: "profile",
      element: <Profile />,
    },
  ],
},
{
  path: "*",
  element: <NotFound />,
},

]);

return (
    <RouterProvider router={router} />
);
}
export default App;
