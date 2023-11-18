import React from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import { getActorImages } from "../../api/tmdb-api";

function MovieCastListPageTemplate({ movieCast,  title }) {
    
    let cast = movieCast

    const { data: actorImage} = useQuery(
      movieCast.map((actor) => actor.id),
      () => Promise.all(movieCast.map((actor) => getActorImages(actor.id))).then((images) =>
        images.map((image) => ({
          id: image.file_path,
          url: `https://image.tmdb.org/t/p/w200/${image.file_path}`,
        }))
      )
    );

    const actorImages = actorImage
  
    return (
      <Grid container sx={{ padding: '20px' }}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <ActorList images={actorImages} actors={cast}></ActorList>
        </Grid>
      </Grid>
    );
  }
  export default MovieCastListPageTemplate;