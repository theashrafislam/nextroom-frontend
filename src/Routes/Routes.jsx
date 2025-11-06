import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <>hello i am about page. your are all okay!</>
        }
    ]
  },
]);

export default router;