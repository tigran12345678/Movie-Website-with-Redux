// src/App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { auth } from "./components/config/firebase";

import DrawMovies      from "./components/drawMovies";
import FavoriteMovies  from "./components/favoritesPage";
import Login           from "./components/loginPage/login";
import Layout          from "./components/layout/headerNavigation";

const ProtectedRoute = ({ children }) =>
  auth.currentUser
    ? children
    : <Navigate to="/" replace />;
    
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/mainPage",
    element: (
      <ProtectedRoute>
        <Layout>
          <DrawMovies />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/favoriteMovies",
    element: (
      <ProtectedRoute>
        <Layout>
          <FavoriteMovies />
        </Layout>
      </ProtectedRoute>
    ),
  },
]);

// 3️⃣ App just renders the router
export default function App() {
  return <RouterProvider router={router} />;
}
