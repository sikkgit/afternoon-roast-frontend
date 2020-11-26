import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";
import cup from "../../assets/cup.svg";

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
          <Link href="/" style={{ textDecoration: "none" }}>
            <img src={cup} alt="Afternoon Roast Cup Logo" className={cupLogo} />
          </Link>

          {/* <Button color="inherit">
            <Link href="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
