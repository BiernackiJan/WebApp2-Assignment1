import React from "react";
import PageTemplate from '../components/templateMovieActorsPage';
import { useQuery } from 'react-query';
import { getCast } from "../api/tmdb-api";
import { useParams } from "react-router-dom";
import Spinner from '../components/spinner';


const MovieActorsPage = () => {
    const { id } = useParams(); 
    const {data: credits, error, isLoading, isError } = useQuery(
        ["credits", {id: id}], 
        () => getCast(id))
    
    if (isLoading) {
        return <Spinner />
    }
        
    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movieCast = credits

    // console.log("Movie Actors Page", movieCast)

    return (
        <>
        <PageTemplate
            movieCast={movieCast}
            title={'Movie Actors'}
        />
        </>
        );
    };

export default MovieActorsPage;