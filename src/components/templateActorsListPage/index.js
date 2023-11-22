import React, { useState } from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import { getActorImages } from "../../api/tmdb-api";
import FilterCard from "../filterActorsCard";



function ActorsListPageTemplate({ actors, title }) {
  const [nameFilter, setNameFilter] = useState("");
  
  const { data: actorImage} = useQuery(
    actors.map((actor) => actor.id),
    () => Promise.all(actors.map((actor) => getActorImages(actor.id))).then((images) =>
      images.map((image) => ({
        id: image.file_path,
        url: `https://image.tmdb.org/t/p/w200/${image.file_path}`,
      }))
    )
  );

  let displayedActors = actors
      .filter((a) => {
        return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
      })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  const images = actorImage


  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            nameFilter={nameFilter}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={5}>
          <ActorList images={images} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorsListPageTemplate;
