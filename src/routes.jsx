import Main from "./Layout/Main";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeStock from "./Pages/HomeStock";
import AboutStock from "./Pages/AboutStock";
import About from "./Layout/About";
import Work from "./Layout/Work";
import WorkStock from "./Pages/WorkStock";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Main />}>
        <Route index element={<HomeStock />} />
      </Route>

      <Route path="aboutus" element={<About />}>
        <Route index element={<AboutStock />} />
      </Route>

      <Route path="ourwork" element={<Work />}>
        <Route index element={<WorkStock />} />
      </Route>

    </Route>
  )
);

function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
