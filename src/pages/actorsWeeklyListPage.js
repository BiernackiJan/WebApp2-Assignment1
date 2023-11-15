import React from "react";
import { getActorsWeekly } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorsListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'



const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getActorsWeekly)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  console.log(actors)
  
  return (
    <PageTemplate
      title="Weekly Trending Actors"
      actors={actors}
      action={(actors) => {
        return <AddToFavoritesIcon actor={actors} />
      }}
    />
  );
};
export default ActorsPage;
