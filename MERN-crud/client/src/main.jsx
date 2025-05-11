import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { EmployeeProvider } from "./context/EmpContext.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Form from "./components/Form.jsx";
import Home from "./components/Home.jsx";

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
        path: "add-employee",
        element: <Form />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <EmployeeProvider>
    <RouterProvider router={router} />
  </EmployeeProvider>
);
