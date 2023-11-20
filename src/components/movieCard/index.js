import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchListIcon from "@mui/icons-material/PlaylistAdd";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';
import InfoIcon from "@mui/icons-material/Info";
import { Tooltip } from "@mui/material";
import RecommendedIcon from '@mui/icons-material/NewReleases';
import { getRecommendedMovies } from "../../api/tmdb-api";


export default function MovieCard({ movie, action }) {
  const { favorites, addToFavorites } = useContext(MoviesContext);

  const { watchList, addToWatchList } = useContext(MoviesContext);

  const id = movie.id;

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  if (watchList.find((id) => id === movie.id)) {
    movie.watchList = true;
  } else {
    movie.watchList = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  const handleAddToWatchList = (e) => {
    e.preventDefault();
    addToWatchList(movie);
  };

  const handleGetRecommendedMovies = (e) => {
    e.preventDefault();
    getRecommendedMovies(movie.id);
  };


  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <React.Fragment>
          {movie.favorite && (
            <Avatar sx={{ backgroundColor: 'red', marginRight: .5 }}>
              <FavoriteIcon />
            </Avatar>
          )}
          {movie.watchList && (
            <Avatar sx={{ backgroundColor: 'blue'}}>
              <WatchListIcon />
            </Avatar>
          )}
          </React.Fragment>
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions >
        {action(movie)}
        <div style={{flexGrow: 1}}></div>
        <div style={{flexGrow: 2}}></div>
        <div style={{flexGrow: 2}}>
          <Link to={`/movies/${id}/recommendations`}>
            <Tooltip title="Recommended Movies" placement="bottom" arrow>
              <RecommendedIcon color="primary" fontSize="large"/>
            </Tooltip>
          </Link>
        </div>
        <div style={{ flexGrow: 2}} />
          <Link to={`/movies/${movie.id}`}>
            <Tooltip title="More Info" placement="bottom" arrow>
              <InfoIcon color="primary" fontSize="large"  />
            </Tooltip>
          </Link>
      </CardActions>
    </Card>
  );
}