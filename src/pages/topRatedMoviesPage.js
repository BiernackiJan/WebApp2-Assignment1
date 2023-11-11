import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateTopRatedPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'



const TopRatedMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('topRated', getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const topRatedMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const topRatedList = topRatedMovies.filter(m => m.topRatedList)
  localStorage.setItem('watchList', JSON.stringify(topRatedList))
  const addToWatchList = (movieId) => true 

  return (
    <PageTemplate
      title="Top Rated Movies"
      topRatedMovies={topRatedMovies}
      action={(movie) => {
        return <AddToWatchListIcon movie={movie} />
      }}
    />
  );
};
export default TopRatedMoviesPage;