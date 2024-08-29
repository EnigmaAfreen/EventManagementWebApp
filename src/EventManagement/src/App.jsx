import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./CSS/app.css";
import "./CSS/seller.css";
import "./CSS/buyer.css";

import LoginPage from "./AllContent/LoginPage";
import Seller from "./AllContent/Seller";
import Buyer from "./AllContent/BuyerFlow";
import EventManagementDashBoard from "./AllContent/EventManagementDashBoard";
import UpcomingEvent from "./AllContent/UpcomingEvents";
import UpcomingEvents from "./AllContent/UpcomingEvents";
import CreateEvent from "./AllContent/CreateEvent";
//import Main from "./AllContent/Main";

const router = createBrowserRouter(
  [
    {
      path: "/index.html",
      element: <LoginPage />,
    },

    {
      path: "/eventDashBoard",
      element: <EventManagementDashBoard />,
    },

    {
      path: "/upcomingEvents",
      element: <UpcomingEvents />,
    },

    {
      path: "/createEvent",
      element: <CreateEvent />,
    },

    {
      path: "/sellerFlow",
      element: <Seller />,
    },
    {
      path: "/buyerFlow",
      element: <Buyer />,
    },
    // {
    //   path: "/main",
    //   element: <Main />,
    // },
  ],
  {
    basename: "/events",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
