import React from "react";
import { useQuery } from "react-query";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getActorImages } from "../../api/tmdb-api";
import img from '../../images/actor-place-holder-image.jpg'
import { Link } from "react-router-dom";

const ActorCard = ({ actor }) => {
  const { data: images, error } = useQuery(["actorImages", actor.id], () => getActorImages(actor.id));

  // console.log(actor)

  if (error) {
    console.error("Error fetching actor images:", error);
  }

  const firstImage = images?.profiles[0]?.file_path;

  return (
    <Card sx={{ marginTop: 5, maxWidth: 300 }}>
        <Link to={`/movies/:id/actors/${actor.id}`}>
        <CardMedia
          component="img"
          height="300"
          image={
            actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${firstImage}`
            : img
            }
          alt={actor.name}
        />
        </Link>
      <CardContent>
        <Typography variant="h6" component="div">
          {actor.name}
        </Typography>
      </CardContent>
    </Card>
    
  );
};

export default ActorCard;