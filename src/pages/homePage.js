import React from "react";
import { getMovies, getSortedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import '../../src/login.css';


const HomePage = () => {

  const {  data: unsortedMovies, error, isLoading, isError }  = useQuery('discover', getMovies)
  

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const movies = unsortedMovies;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return ( 
         <AddToFavoritesIcon movie={movie} />
        );
      }}
    />
  );
};
export default HomePage;