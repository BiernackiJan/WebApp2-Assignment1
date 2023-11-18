import React from "react";
import { getRecommendedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateRecommendedMoviesPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'
import { useParams } from "react-router-dom";



const RecommendedMoviesPage = (props) => {
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery(
      ["movie", { id: id }],
      () => getRecommendedMovies(id)
   );

  console.log(data)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const recommendedMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const moviesList = recommendedMovies.filter(m => m.movie)
  localStorage.setItem('watchList', JSON.stringify(moviesList))
  const addToWatchList = (movieId) => true 

  return (
    <PageTemplate
      recommendedMovies={recommendedMovies}
      title="Recommended Movies"
      action={(movie) => {
        return <AddToWatchListIcon movie={movie} />
      }}
    />
  );
};
export default RecommendedMoviesPage;