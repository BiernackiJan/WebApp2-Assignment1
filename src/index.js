import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import SiteHeader from './components/siteHeader'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import TopRatedMoviePage from "./pages/topRatedMoviesPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import WatchListPage from "./pages/watchListPage";
import ActorsWeeklyPage from "./pages/actorsWeeklyListPage";
import ActorsDailyPage from "./pages/actorsDailyListPage";
import ActorPage from "./pages/actorDetailsPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
      <Routes>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/actors/:id" element={<ActorPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/actors/actorsWeekly" element={<ActorsWeeklyPage />} />
        <Route path="/actors/actorsDaily" element={<ActorsDailyPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/nowPlaying" element={<NowPlayingPage />} />
        <Route path="/movies/topRated" element={<TopRatedMoviePage />} />
        <Route path="/movies/watchList" element={<WatchListPage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
   <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);