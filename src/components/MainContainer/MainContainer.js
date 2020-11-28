import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DefaultButton from "../DefaultButton/DefaultButton";
import { Typography } from "@material-ui/core";
import { StoriesContext } from "../../context/StoriesContext";
import { Link } from "react-router-dom";
import { NewslettersContext } from "../../context/NewslettersContext";
import { getFormattedDate } from "../../utils/helperFns";

const useStyles = makeStyles((theme) => ({
  container: { marginTop: 10 },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleTable: {
    textAlign: "left",
    "& td": { padding: "3px 5px" },
  },
}));

export default function MainContainer() {
  const { container, buttonsContainer, titleTable } = useStyles();
  const [newsletters, setNewsletters] = useContext(NewslettersContext);
  const [stories, setStories] = useContext(StoriesContext);

  const getStoryTitles = () => {
    if (stories && stories.length) {
      return stories.map(({ id, title, formatted_date }) => {
        return (
          <tr key={id}>
            <td>
              <Link to={`/stories/${id}`}>{title}</Link>
            </td>
            <td>
              <Typography variant="caption" display="block">
                {getFormattedDate(formatted_date)}
              </Typography>
            </td>
          </tr>
        );
      });
    }
  };
  const getPublishedNewsLetterTitles = () => {
    if (newsletters && newsletters.length) {
      return newsletters.map(({ id, title, formatted_date }) => {
        return (
          <tr key={id}>
            <td>
              <Link to={`/newsletters/${id}`}>{title}</Link>
            </td>
            <td>
              <Typography variant="caption" display="block">
                {getFormattedDate(formatted_date)}
              </Typography>
            </td>
          </tr>
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
        <table className={titleTable}>{getStoryTitles()}</table>
      </div>
      <br />
      <hr />

      <div>
        <Typography align="center" color="primary" variant="h6">
          Published Newsletters
        </Typography>
        <table className={titleTable}>{getPublishedNewsLetterTitles()}</table>
      </div>
    </section>
  );
}
