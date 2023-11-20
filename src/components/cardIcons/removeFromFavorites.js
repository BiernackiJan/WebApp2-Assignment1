import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import Tooltip from '@mui/material/Tooltip';


const RemoveFromFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    context.removeFromFavorites(movie);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
    <div style={{flexGrow: 2}}>
      <Tooltip title="Remove from favourites" placement="bottom" arrow >
        <DeleteIcon color="primary" fontSize="large" />
      </Tooltip>
    </div>
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;