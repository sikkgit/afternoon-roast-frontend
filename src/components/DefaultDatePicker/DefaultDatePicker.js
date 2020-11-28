import { TextField } from "@material-ui/core";
import React from "react";

export default function DefaultDatePicker({
  label,
  onChange,
  defaultValue,
  disabled,
}) {
  return (
    <TextField
      {...{
        id: "date",
        label,
        type: "date",
        InputLabelProps: { shrink: true },
        onChange,
        defaultValue,
        disabled,
        style: { width: "80%", marginTop: 5 },
      }}
    />
  );
}
