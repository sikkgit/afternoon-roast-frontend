import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultButton from "../DefaultButton/DefaultButton";
import { Typography } from "@material-ui/core";
import { StoriesContext } from "../../context/StoriesContext";
import { Link } from "react-router-dom";
import { NewslettersContext } from "../../context/NewslettersContext";

const useStyles = makeStyles((theme) => ({
  container: { marginTop: 10 },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function MainContainer() {
  const { container, buttonsContainer } = useStyles();

  const [newsletters, setNewsletters] = useContext(NewslettersContext);
  const [stories, setStories] = useContext(StoriesContext);

  //TO DO
  const getStoryTitles = () => {
    if (stories.length) {
      return stories.map(({ id, title }) => {
        return (
          <div key={id}>
            <Link to={`/stories/${id}`}>{title}</Link>
            <br />
          </div>
        );
      });
    }
  };
  const getPublishedNewsLetterTitles = () => {
    if (newsletters.length) {
      return newsletters.map(({ id, title }) => {
        return (
          <div key={id}>
            <Link to={`/newsletters/${id}`}>{title}</Link>
            <br />
          </div>
        );
      });
    }
  };

  return (
    <section className={container}>
      <div className={buttonsContainer}>
        <DefaultButton text={"Add Story"} to={"/new-story"} />
        <DefaultButton text={"Publish Newsletter"} to={"/new-newsletter"} />
      </div>
      <div>
        <Typography align="center" color="primary" variant="h6">
          My Stories
        </Typography>
        {getStoryTitles()}
      </div>

      <br />

      <div>
        <Typography align="center" color="primary" variant="h6">
          Published Newsletters
        </Typography>
        {getPublishedNewsLetterTitles()}
      </div>
    </section>
  );
}
