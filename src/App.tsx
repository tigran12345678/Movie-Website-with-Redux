import DrawMovies from "./components/drawMovies"
import FavoriteMovies from "./components/favoritesPage"
import Login from "./components/loginPage/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/headerNavigation"

const FavoritesPage = () => {
  return (
    <FavoriteMovies/>
  )
}

const LoginPage = () => {
  return(
    <Login />
  )
}

const MainPageMovies = () => {
  return (
    <DrawMovies/>
  )
}



const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout> <LoginPage/> </Layout>
    },

    {
      path: "/mainPage",
      element: <Layout> <MainPageMovies/> </Layout>
    },

    {
    path: "/favoriteMovies",
    element: <Layout> <FavoritesPage/> </Layout>
    }

]);


function App() {


  return (
     <>
      <RouterProvider router = {router} />
     </>
  )
}

export default App
