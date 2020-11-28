import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundContainer() {
  return (
    <Typography variant="h6">
      Oops. That page could not be found. <br />
      <Link to="/">Go Home</Link>
    </Typography>
  );
}
