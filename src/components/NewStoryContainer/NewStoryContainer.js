import React, { useContext, useState } from "react";
import QuillEditor from "../QuillEditor/QuillEditor";
import { makeStyles } from "@material-ui/core/styles";
import DefaultTextField from "../DefaultTextField/DefaultTextField";
import DefaultButton from "../DefaultButton/DefaultButton";
import Story from "../Story/Story";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../utils/constants";
import { StoriesContext, StoryContext } from "../../context/StoriesContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {},
});

export default function NewStoryContainer() {
  const { container } = useStyles();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [formVisible, setFormVisible] = useState(true);
  const [stories, setStories] = useContext(StoriesContext);
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handlePreviewClick = () => {
    setFormVisible(false);
  };

  const handleStorySubmit = async () => {
    try {
      const story = {
        title,
        html: content,
        tag,
      };

      const response = await axios.post(`${BACKEND_BASE_URL}/stories`, story);
      const { data } = await response;

      if (data.error) {
        console.log(data.error);
      } else {
        setStories((prevStories) => [data, ...prevStories]);
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
      <QuillEditor value={content} setStateCallback={setContent} />
      <DefaultButton text="Preview" onClick={handlePreviewClick} />
    </form>
  );

  const preview = (
    <div>
      <Story {...{ title, tag, content }} />
      <DefaultButton text="Edit" onClick={() => setFormVisible(true)} />{" "}
      {/* TODO */}
      <DefaultButton text="Submit" onClick={handleStorySubmit} />
    </div>
  );

  return (
    <section className={container}>
      {formVisible ? articleForm : preview}
    </section>
  );
}
