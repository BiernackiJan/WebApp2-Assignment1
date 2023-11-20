import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

const ActorDetails = ({ actorDetails }) => {
  return (
    <>
      <Grid></Grid>
      <Typography variant="h3" component="h2">
        {actorDetails?.name}
      </Typography>

      <Typography variant="h5" component="h3">
        Known for:  {actorDetails?.known_for_department}
      </Typography>

      <hr />

      <Typography variant="h6" component="p">
        Biography
      </Typography>

      <Typography variant="h7" component="p">
        {actorDetails?.biography}
      </Typography>

      <br />
      </>
    );
};
export default ActorDetails ;