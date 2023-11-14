import React from "react";
import Actor from "../actorCard";
import Grid from "@mui/material/Grid";

const ActorList = ( {actors, images}) => {
  return (
    <>
      {actors && images && actors.map((actor, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Actor actor={actor} image={images[index]} />
        </Grid>
      ))}
    </>
  );
};

export default ActorList;