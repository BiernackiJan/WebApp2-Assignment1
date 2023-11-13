import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateNowPlayingPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'



const NowPlayingPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('now playing', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const nowPlaying = data.results;

  // Redundant, but necessary to avoid app crashing.
  const nowPlayingList = nowPlaying.filter(m => m.nowPLayingList)
  localStorage.setItem('watchList', JSON.stringify(nowPlayingList))
  const addToWatchList = (movieId) => true 

  return (
    <PageTemplate
      title="Now Playing"
      nowPlaying={nowPlaying}
      action={(movie) => {
        return <AddToWatchListIcon movie={movie} />
      }}
    />
  );
};
export default NowPlayingPage;