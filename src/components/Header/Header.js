import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import cup from "../../assets/cup.svg";

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={3}>
      <Toolbar>
        <Button href="/">
          <img src={cup} alt="Afternoon Roast Cup Logo" style={{ width: 50 }} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
