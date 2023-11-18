import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import WatchListIcon from "@mui/icons-material/PlaylistAddRounded";
import Tooltip from '@mui/material/Tooltip';

const AddToWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = (e) => {
    e.preventDefault();
    context.addToWatchList(movie);
  };

  return (
    
    <IconButton aria-label="add to watch list" onClick={handleAddToWatchList}>
      <Tooltip title="Add to WatchList" placement="bottom" arrow >
        <WatchListIcon color="primary" fontSize="large" />
      </Tooltip>
    </IconButton>
    
  );
};

export default AddToWatchListIcon;