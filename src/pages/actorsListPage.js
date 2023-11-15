import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorsListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'



const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  console.log(actors[0]["name"])

  // // Redundant, but necessary to avoid app crashing.
  // const favorites = actors.filter(a => a.favorite)
  // localStorage.setItem('favorites', JSON.stringify(favorites))
  // const addToFavorites = (actorId) => true 
  
  return (
    <PageTemplate
      title="Weekly Trending Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavoritesIcon actor={actor} />
      }}
    />
  );
};
export default ActorsPage;