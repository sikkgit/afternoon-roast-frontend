import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import cup from "../../assets/cup.svg";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "1vw",
  },
  cupLogo: {
    width: 50,
  },
}));

export default function Header() {
  const { toolbar, cupLogo } = useStyles();

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar className={toolbar}>
          <Button href="/">
            <img src={cup} alt="Afternoon Roast Cup Logo" className={cupLogo} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
