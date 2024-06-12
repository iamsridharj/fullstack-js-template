import React, { Suspense, lazy } from 'react';
import { ThemeContext } from 'styled-components';
import { Header } from "@design-system/ui-kit";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useTheme } from "src/hooks/ui/useTheme";

const HomePage = lazy(() => import('src/pages/HomePage/HomePage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

export default function App(): React.JSX.Element {
  const theme = useTheme();

  return (
    <Suspense fallback={"Loading......"}>
      <ThemeContext.Provider value={theme}>
        <Header />
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </Suspense>
  );
}
