import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import Tooltip from '@mui/material/Tooltip';

const RemoveFromWatchListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchList = (e) => {
    e.preventDefault();
    context.removeFromWatchList(movie);
  };
  return (
    <IconButton
      aria-label="remove from watch list"
      onClick={handleRemoveFromWatchList}
    >
    <div style={{flexGrow: 2}}>
    <Tooltip title="Remove watchlist" placement="bottom" arrow >
      <DeleteIcon color="primary" fontSize="large" />
    </Tooltip>
    </div>
    </IconButton>
  );
};

export default RemoveFromWatchListIcon;