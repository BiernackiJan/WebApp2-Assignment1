import React from "react";
import MovieHeader from "../headerMovieList";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import MovieList from "../movieList";
import Typography from "@mui/material/Typography";



const TemplateActorDetailsPage = ({ allMovies, title, children, action , actorDetails }) => {
  const id = actorDetails?.id

  let displayedMovies = allMovies
  // console.log("actMovies" , actorDetails)
    
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
                  <ImageListItem key={actorDetails?.profile_path} cols={1}>
                  <img
                      src={`https://image.tmdb.org/t/p/w500/${actorDetails?.profile_path}`}
                      alt={actorDetails?.profile_path}
                      style={{ width: "80%" , height: "auto"}}
                  />
                  </ImageListItem>
            </ImageList>
          </div>
        </Grid>
      

        <Grid item xs={9} sx={{marginLeft: -10, marginTop: 1 }}>
          <Grid container>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <br />

      <Typography variant="h3" component="h3">
        Starred In:  
      </Typography>
      
      <hr />

      <Grid item container spacing={5}>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
      
    </>
  );
};


export default TemplateActorDetailsPage;