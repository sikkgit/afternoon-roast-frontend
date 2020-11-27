import React from "react";
import { Button } from "@material-ui/core";

export default function DefaultButton({ text, to, onClick }) {
  return (
    <Button
      {...{
        variant: "outlined",
        size: "small",
        color: "primary",
        href: to,
        onClick,
      }}
    >
      {text}
    </Button>
  );
}
