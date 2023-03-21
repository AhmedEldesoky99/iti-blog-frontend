//core
import { createBrowserRouter } from "react-router-dom";

//custom
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import SignUp from "./pages/Sign-up";
import Post from "./pages/Post";
import User from "./pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "user/:id",
    element: <User />,
  },
  {
    path: "post/:id",
    element: <Post />,
  },
]);
