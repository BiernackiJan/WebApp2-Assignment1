import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovieList";
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'


const TemplateActorDetailsPage = ({ title , children}) => {
  const { id } = useParams();
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: id }],
    () => getActorImages(id)
  );

  
  if (isLoading) {
    return <Spinner />;
  }


  if (isError) {
    return <h1>{error.message}</h1>;
  }
  // const images = data.posters 
  const firstImage = data?.profiles[0]?.file_path;

  return (
    <>
      <MovieHeader title={title} />

      <Grid container spacing={5} sx={{ padding: "0px", marginLeft: -3, marginRight: -3 }}>
        <Grid item xs={3} >
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                  <ImageListItem key={firstImage} cols={1}>
                  <img
                      src={`https://image.tmdb.org/t/p/w500/${firstImage}`}
                      alt={firstImage}
                      style={{ width: "80%" , height: "auto"}}
                  />
                  </ImageListItem>
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9} sx={{ padding: "0px", marginLeft: -10, marginRight: -10, marginTop: 2 }}>
          
          {children}
        </Grid>
      </Grid>
    </>
  );
};


export default TemplateActorDetailsPage;