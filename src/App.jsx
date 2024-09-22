import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Home from "./Pages/Home.jsx";
import { Layout } from "./components/Layout.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import OnGoingTreatment from "./components/OnGoingTreatment.jsx";
import Treated from "./components/Treated.jsx";
import OnGoingTreatmentPage from "./Pages/OnGoingTreatmentPage.jsx";
import HealthcarePage from "./Pages/HealthcarePage.jsx";
import TreatedPage from "./Pages/TreatedPage.jsx";

let allroutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/AuthPage",
        element: <AuthPage />,
      },
      {
        path: "/OnGoingTreatmentPage",
        element: <OnGoingTreatmentPage />,
      },
      {
        path: "/TreatedPage",
        element: <TreatedPage />,
      },
      {
        path: "HealthcarePage",
        element: <HealthcarePage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={allroutes} />;

export default App;
