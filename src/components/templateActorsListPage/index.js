import React from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorsListPageTemplate({ actors, title, action }) {  

  let displayedActors = actors

  // const handleChange = (type, value) => {
  //   if (type === "name") setNameFilter(value);
  //   else setGenreFilter(value);
  // };
  
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorsListPageTemplate;