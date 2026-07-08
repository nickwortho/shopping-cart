import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router";
import './styles/globals.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
