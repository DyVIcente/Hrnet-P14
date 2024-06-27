import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { RootLayout } from "../layout/index.js";

import { EmployeeList, Home } from "../pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/employee-list" element={<EmployeeList />} />
    </Route>
  )
);

const Router = () => <RouterProvider router={router} />;

export default Router;
