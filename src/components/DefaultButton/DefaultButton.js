import React from "react";
import { Button } from "@material-ui/core";

export default function DefaultButton({ text, to }) {
  return (
    <Button variant="outlined" size="small" color="primary" href={to}>
      {text}
    </Button>
  );
}
