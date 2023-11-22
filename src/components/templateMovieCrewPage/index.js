import React, { useState } from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import { getActorImages } from "../../api/tmdb-api";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FilterCard from "../filterActorsCard";



function MovieCastListPageTemplate({ movieCast,  title }) {
    const [nameFilter, setNameFilter] = useState("");

    let crew = movieCast.crew
    .filter((a) => {
      return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })

    const handleChange = (type, value) => {
      if (type === "name") setNameFilter(value);
    };

    const { data: crewImage} = useQuery(
      crew.map((actor) => actor.id),
      () => Promise.all(crew.map((actor) => getActorImages(actor.id))).then((images) =>
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
      // window.location.reload();
    };

    const containerStyle = {
      position: "absolute",
      top: "23%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };



    const navigate = useNavigate();

    const crewImages = crewImage
  
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

        <Grid item container spacing={5} style={{marginTop: 5}}>
          <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
            <FilterCard
              onUserInput={handleChange}
              nameFilter={nameFilter}
              />
          </Grid>
        </Grid>
        

        <Grid item container spacing={5}></Grid>

        <Typography variant="h3" component="h3" sx={{marginTop: 5, marginBottom: -3}}>
          Crew:  
        </Typography>
        <Grid item container spacing={5}>
          <ActorList images={crewImages} actors={crew}></ActorList>
        </Grid>
      </Grid>
      </>
    );
}
  export default MovieCastListPageTemplate;