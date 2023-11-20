import React from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import { getActorImages } from "../../api/tmdb-api";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


function MovieCastListPageTemplate({ movieCast,  title }) {
    
    let cast = movieCast.cast    

    const { data: actorImage} = useQuery(
      cast.map((actor) => actor.id),
      () => Promise.all(cast.map((actor) => getActorImages(actor.id))).then((images) =>
        images.map((image) => ({
          id: image.file_path,
          url: `https://image.tmdb.org/t/p/w200/${image.file_path}`,
        }))
      )
    );

    const movieId = movieCast.id

    const menuOptions = [
      { label: "All",  path: `/movies/${movieId}/actors` },
      { label: "Actors",  path: `/movies/${movieId}/actorsOnly` },
      { label: "Crew", path: `/movies/${movieId}/crewOnly`},

    ];

    const handleMenuSelect = (pageURL) => {
      navigate(pageURL, { replace: true });
    };

    const containerStyle = {
      position: "absolute",
      top: "20%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };



    const navigate = useNavigate();

    const actorImages = actorImage
  
    return (
      <>
      <Grid container sx={{ padding: '20px' }}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>

        
        <div style={containerStyle}>
          {menuOptions.map((opt) => (
            <Button
              key={opt.label}
              color="inherit"
              onClick={() => handleMenuSelect(opt.path)}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '15px', fontWeight: 'bold', marginBottom: 10 }}>
                {opt.label}
              </div>
            </Button>
          ))}
        </div>
        

        <Grid item container spacing={5}></Grid>

        <Typography variant="h3" component="h3" sx={{ marginBottom: -4, marginTop: 5}}>
          Actors:  
        </Typography>
        <Grid item container spacing={5}>
          <ActorList images={actorImages} actors={cast}></ActorList>
        </Grid>
      </Grid>
      </>
    );
}
  export default MovieCastListPageTemplate;