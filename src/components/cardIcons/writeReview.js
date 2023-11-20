import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

const WriteReviewIcon = ({ movie }) => {
  return (
    <Link
      to={`/reviews/form`}
      state={{
          movieId: movie.id,
      }}
    >
    <div style={{flexGrow: 2}}>
    <Tooltip title="Write a review" placement="bottom" arrow >
      <RateReviewIcon color="primary" fontSize="large" />
    </Tooltip>
    </div>
    </Link>
  );
};

export default WriteReviewIcon;