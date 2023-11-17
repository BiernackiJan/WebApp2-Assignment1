import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails/";
import PageTemplate from "../components/templateActorDetails";
import { getActor, getActorCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'

const ActorPage = () => {
  const { id } = useParams();
    const { data: movies, error, isLoading, isError} = useQuery(
      ["movie", { id: id }],
      () => getActorCredits(id)
    );

    const { data: actor  } = useQuery(
      ["actor", { id: id }],
      () => getActor(id)
    );  

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const allMovies = movies.cast;

  const popularList = allMovies.filter(m => m.popularList)
  localStorage.setItem('actorMovies', JSON.stringify(popularList));
  const addToPopularList = (movieId) => true

  return (
    <>
    {actor ? (
      <>
        <PageTemplate  allMovies={allMovies}
        actorDetails={actor}
        title="Actor Information"
        action={(movies) => {
          return <AddToWatchListIcon movies={movies} />;
        }}>
        <ActorDetails actorDetails={actor} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for actor details</p>
    )}
    </>
  );
};

export default ActorPage;