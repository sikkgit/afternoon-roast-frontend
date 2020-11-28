import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Logo from "../../Logo/Logo";
import parse from "html-react-parser";

const useStyles = makeStyles({
  card: {
    width: "90%",
    margin: "15px auto",
    padding: 15,
    borderRadius: 15,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default function StoryCard({ starter, date, html, tag, title }) {
  const { card, header } = useStyles();

  const getFormattedDate = () => {
    date = new Date(date);
    const month = date.toLocaleString("default", { month: "long" });

    return `${month} ${date.getDate() + 1}, ${date.getFullYear()}`;
  };

  const getHeading = () => {
    if (starter) {
      return (
        <div className={header}>
          <Logo size={140} />
          <div style={{ fontSize: 14 }}>{getFormattedDate()}</div>
        </div>
      );
    } else {
      return (
        <>
          <Typography
            variant="h6"
            color="primary"
            style={{ fontWeight: 700, fontSize: 18 }}
          >
            {tag.toUpperCase()}
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            style={{ fontWeight: 700, fontSize: 20 }}
          >
            {title}
          </Typography>
        </>
      );
    }
  };

  return (
    <Paper className={card}>
      {getHeading()}

      {html && parse(html)}
    </Paper>
  );
}
