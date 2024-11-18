import React, {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import '@nextui-org/react'
import NewFilms from "./pages/NewFilms.jsx";
import FilmInformation from "./pages/filmInformation.jsx";
import { FavoritesProvider } from './context/favouritesContext.jsx';
import FavouritesPage from "./pages/favourites.jsx";
import { useLocation } from "react-router-dom";
import '@nextui-org/react'
import FilmsPage from "./pages/films.jsx";
import SerialInfo from './pages/serialsInfo.jsx'
import SerialsPage from "./pages/serials.jsx";
import { Analytics } from "@vercel/analytics/react"

import {CircularProgress} from "@nextui-org/react";
import TrailersPage from "./pages/trailers.jsx";
import WatchedPage from "./pages/watched.jsx";


const routes = [
  {
      path: "/",
      element: <HomePage />,
      children: [
          {path: "newfilms", element: <NewFilms />},
          {path: "/filmInfo/:title", element: <FilmInformation />},
          {path: "favourites", element: <FavouritesPage />},
          {path: "films", element: <FilmsPage />},
          {path: "serials", element: <SerialsPage />},
          {path: "/serialInfo/:title", element: <SerialInfo />},
          {path: "/trailers", element: <TrailersPage/>},
          {path: "/watched" , element: <WatchedPage/>}          
      ]
  },

]
const router = createBrowserRouter(routes, {
  future: {
      v7_normalizeFormMethod: true,
  },
});
const LazyComponent = React.lazy(() => import('./components/lazy'));

function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {

  const [ setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
      <Analytics>
      <FavoritesProvider>
    <Suspense fallback={<div className="bg-white text-3xl flex items-center content-center gap-2" style={{textAlign: 'center', marginTop: '20%', justifyContent: 'center'}}>Loading <CircularProgress size="sm" aria-label="Loading..." /></div>}>
        <LazyComponent/>
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
    </Suspense>
      </FavoritesProvider>
      </Analytics>
);
}

export default App
