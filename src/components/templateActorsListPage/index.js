import React from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import { getActorImages } from "../../api/tmdb-api";



function ActorsListPageTemplate({ actors, title }) {
  
  const { data: actorImage} = useQuery(
    actors.map((actor) => actor.id),
    () => Promise.all(actors.map((actor) => getActorImages(actor.id))).then((images) =>
      images.map((image) => ({
        id: image.file_path,
        url: `https://image.tmdb.org/t/p/w200/${image.file_path}`,
      }))
    )
  );

  const images = actorImage

  let displayedActors = actors

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList images={images} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorsListPageTemplate;
