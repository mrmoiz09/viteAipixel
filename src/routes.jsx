import Main from "./Layout/Main";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import HomeStock from "./Pages/HomeStock";
import AboutStock from "./Pages/AboutStock";
import WorkStock from "./Pages/WorkStock";

const router = createBrowserRouter(
  <BrowserRouter basename="/">
    {createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomeStock />} />
        <Route path="aboutus" element={<AboutStock />} />
        <Route path="ourwork" element={<WorkStock />} />
      </Route>
    )}
  </BrowserRouter>
);

function Routes() {
  return (
    <Main>
      <RouterProvider router={router} />
    </Main>
  );
}

export default Routes;
