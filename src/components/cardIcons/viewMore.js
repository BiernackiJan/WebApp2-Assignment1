import React from "react";
import IconButton from "@mui/material/IconButton";
import ViewMore from "@mui/icons-material/ReadMoreSharp";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ViewMoreIcon = ({ movie }) => {

  const movieId = movie.id;

  return (
    <Link to={`/movies/${movieId}/actors`}>
    <IconButton 
        aria-label="more info" 
        sx={{height: 375,  
            marginLeft: 2, 
            marginTop: 7, 
            width: 200, 
            borderRadius: 2,  
            flexDirection: 'column',
            alignItems: 'center',
            }} >
        <ViewMore color="primary" fontSize="large" />
        
        <Typography sx={{ fontWeight: 'bold'}} >
            View More   
        </Typography>
    </IconButton>
    </Link>
  );
};

export default ViewMoreIcon;