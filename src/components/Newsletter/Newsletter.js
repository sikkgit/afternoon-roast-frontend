import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import StoryCard from "./StoryCard/StoryCard";

const useStyles = makeStyles({
  container: {
    textAlign: "left",
    margin: 20,
  },
});

export default function Newsletter({
  title,
  description,
  date,
  storiesToPublish,
}) {
  const { container } = useStyles();

  const getStories = () => {
    return storiesToPublish.map(({ tag: { name: tag }, title, html, id }) => {
      return <StoryCard {...{ key: id, title, tag, html }} />;
    });
  };

  return (
    <section className={container}>
      <div>
        <Typography
          variant="h6"
          color="inherit"
          style={{ lineHeight: "110%", fontWeight: 700, fontSize: 18 }}
        >
          Afternoon Roast <br />
          ☕️ {title}
        </Typography>
        <Typography variant="body2">To: Roast Readers</Typography>
        <hr />
      </div>

      <StoryCard starter date={date} html={description} />

      {getStories()}
    </section>
  );
}
