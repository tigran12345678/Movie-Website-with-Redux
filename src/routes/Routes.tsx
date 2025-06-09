import { createBrowserRouter } from "react-router-dom";
import Login from "../components/loginPage/login";
import DrawMovies from "../components/mainPage/drawMovies";
import Layout from "../components/layout/headerNavigation";
import FavoriteMovies from "../components/favoriteMovies/favoritesPage";
import {
  LOGIN_PATH,
  MAINPAGE_PATH,
  FAVORITEMOVIES_PATH,
  HOME_PATH,
  SIGNUP_PATH
} from "../paths/Paths";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";
import HomePage from "../components/homPage/HomePage";
import SignUp from "../components/signUpPage/SignUp";

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: (
      <HomePage />
    )
  },
  {
    path: LOGIN_PATH,
    element: <Login />,
  },
  {
    path: SIGNUP_PATH,
    element: <SignUp />
  },
  {
    path: MAINPAGE_PATH,
    element: (
      <ProtectedRoutes>
        <Layout>
          <DrawMovies />
        </Layout>
      </ProtectedRoutes>
    ),
  },
  {
    path: FAVORITEMOVIES_PATH,
    element: (
      <ProtectedRoutes>
        <Layout>
          <FavoriteMovies />
        </Layout>
      </ProtectedRoutes>
    ),
  }


]);


export default router;