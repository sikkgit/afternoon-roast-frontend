import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import DefaultTextField from "../DefaultTextField/DefaultTextField";
import DefaultButton from "../DefaultButton/DefaultButton";
import Story from "../Story/Story";
import { BACKEND_BASE_URL } from "../../utils/constants";
import { StoriesContext } from "../../context/StoriesContext";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

export default function NewStoryContainer(props) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [formVisible, setFormVisible] = useState(true);
  const [stories, setStories] = useContext(StoriesContext);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (props.edit) {
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
          const {
            title,
            html: content,
            tag: { name: tag },
          } = data;

          setTitle(title);
          setContent(content);
          setTag(tag);
        }
      });
    }
  }, [id, props.edit]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTagChange = (e) => setTag(e.target.value);
  const handlePreviewClick = () => setFormVisible(false);

  const handleStorySubmit = async () => {
    try {
      const story = {
        title,
        html: content,
        tag,
      };

      let response;

      if (props.edit) {
        response = await Axios.put(`${BACKEND_BASE_URL}/stories/${id}`, story);
      } else {
        response = await Axios.post(`${BACKEND_BASE_URL}/stories`, story);
      }

      const { data } = await response;

      if (data.error) {
        console.log(data.error);
      } else {
        if (props.edit) {
          setStories((prevStories) =>
            prevStories.map((s) => {
              return s.id === parseInt(id) ? data : s;
            })
          );
        } else {
          setStories((prevStories) => [data, ...prevStories]);
        }

        history.push("/stories/" + data.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const articleForm = (
    <form noValidate autoComplete="off">
      <DefaultTextField
        label="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <DefaultTextField label="Tag" value={tag} onChange={handleTagChange} />
      <RichTextEditor value={content} setStateCallback={setContent} />
      <DefaultButton text="Preview" onClick={handlePreviewClick} />
    </form>
  );

  const preview = (
    <div>
      <Story {...{ title, tag, content }} />
      <DefaultButton text="Edit" onClick={() => setFormVisible(true)} />{" "}
      <DefaultButton text="Submit" onClick={handleStorySubmit} />
    </div>
  );

  return <section>{formVisible ? articleForm : preview}</section>;
}
