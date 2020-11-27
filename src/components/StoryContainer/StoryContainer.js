import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../utils/constants";
import DefaultButton from "../DefaultButton/DefaultButton";
import Story from "../Story/Story";
import { StoriesContext } from "../../context/StoriesContext";

export default function StoryContainer() {
  const { id } = useParams();
  const history = useHistory();

  const [story, setStory] = useState(null);
  const [stories, setStories] = useContext(StoriesContext);

  useEffect(() => {
    async function fetchStory() {
      try {
        const response = await Axios.get(`${BACKEND_BASE_URL}/stories/${id}`);
        const { data } = await response;
        return data;
      } catch (error) {
        console.log(error);
      }
    }

    fetchStory().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStory(data);
      }
    });
  }, [setStory, id]);

  const displayStory = () => {
    if (story) {
      const {
        title,
        tag: { name: tag },
        html: content,
      } = story;

      return <Story {...{ title, tag, content }} />;
    }
  };

  const handleDelete = async () => {
    if (
      window.confirm("Are you sure you want to permanently delete this story?")
    ) {
      try {
        const response = await Axios.delete(
          `${BACKEND_BASE_URL}/stories/${id}`
        );

        const { data } = await response;

        if (data.error) {
          console.log(data.error);
        } else {
          setStories((prevStories) =>
            prevStories.filter((s) => s.id !== parseInt(id))
          );
          history.push("/");
          alert("Story successfully deleted.");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section style={{ textAlign: "right" }}>
      <DefaultButton text="Edit" to={`/edit-story/${id}`} />{" "}
      <DefaultButton text="Delete" onClick={handleDelete} />
      {displayStory()}
    </section>
  );
}
