import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Bag from "./routes/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from './store/index.js'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/Bag",
        element: <Bag />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
