import React from "react";
import TextField from "@material-ui/core/TextField";

export default function DefaultTextField({ label, value, onChange }) {
  return (
    <TextField
      {...{
        id: "standard-basic",
        label,
        value,
        onChange,
        style: { width: "80%", marginTop: 5 },
      }}
    />
  );
}
