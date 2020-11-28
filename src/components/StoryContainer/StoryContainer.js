import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import DefaultButton from "../DefaultButton/DefaultButton";
import Story from "../Story/Story";
import { StoriesContext } from "../../context/StoriesContext";
import { deleteStory, fetchStory } from "../../utils/fetches";

export default function StoryContainer() {
  const { id } = useParams();
  const history = useHistory();

  const [story, setStory] = useState(null);
  const [stories, setStories] = useContext(StoriesContext);

  useEffect(() => {
    fetchStory(id).then((data) => {
      if (data) {
        data.error ? console.log(data.error) : setStory(data);
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
      const data = await deleteStory(id);
      if (data) {
        data.error
          ? console.log(data.error)
          : setStories((prevStories) =>
              prevStories.filter((s) => s.id !== parseInt(id))
            );
      }

      history.push("/");
    }
  };

  return (
    <section style={{ textAlign: "right" }}>
      <DefaultButton text="Edit" to={`/edit-story/${id}`} />
      {"  "}
      <DefaultButton text="Delete" onClick={handleDelete} />
      {displayStory()}
    </section>
  );
}
