import React from "react";
// import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import DefaultButton from "../DefaultButton/DefaultButton";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: { marginTop: 10 },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function MainContainer() {
  const { container, buttonsContainer } = useStyles();

  //TO DO
  const getStoryTitles = () => {};
  const getPublishedNewsLetterTitles = () => {};

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

      <div>
        <Typography align="center" color="primary" variant="h6">
          Published Newsletters
        </Typography>
        {getPublishedNewsLetterTitles()}
      </div>
    </section>
  );
}
