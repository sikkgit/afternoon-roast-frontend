import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_BASE_URL } from "../../utils/constants";
import Story from "../Story/Story";

export default function StoryContainer() {
  const { id } = useParams();

  const [story, setStory] = useState(null);

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

  return <div>{displayStory()}</div>;
}
