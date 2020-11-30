import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import DefaultTextField from "../DefaultTextField/DefaultTextField";
import DefaultButton from "../DefaultButton/DefaultButton";
import Story from "../Story/Story";
import { StoriesContext } from "../../context/StoriesContext";
import { useHistory, useParams } from "react-router-dom";
import { fetchStory, postStory, editStory } from "../../utils/fetches";

export default function NewStoryContainer(props) {
  const history = useHistory();
  const { id } = useParams();
  const [stories, setStories] = useContext(StoriesContext);

  const [state, setState] = useState({
    content: "",
    title: "",
    tag: "",
    formVisible: true,
  });

  const { content, title, tag, formVisible } = state;

  useEffect(() => {
    if (props.edit) {
      fetchStory(id).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          const {
            title,
            html: content,
            tag: { name: tag },
          } = data;

          setState((prevState) => ({ ...prevState, title, content, tag }));
        }
      });
    }
  }, [id, props.edit]);

  const handleTitleChange = (e) => {
    setState((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleTagChange = (e) => {
    setState((prevState) => ({ ...prevState, tag: e.target.value }));
  };

  const handlePreviewClick = () => {
    setState((prevState) => ({ ...prevState, formVisible: false }));
  };

  const handleStorySubmit = async () => {
    const story = {
      title,
      html: content,
      tag,
    };

    let data = await (props.edit ? editStory(id, story) : postStory(story));

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
    }

    history.push("/stories/" + data.id);
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
      <RichTextEditor
        value={content}
        setStateCallback={(content) =>
          setState((prevState) => ({ ...prevState, content }))
        }
      />
      <DefaultButton text="Preview" onClick={handlePreviewClick} />
    </form>
  );

  const preview = (
    <div>
      <Story {...{ title, tag, content }} />
      <DefaultButton
        text="Edit"
        onClick={() =>
          setState((prevState) => ({ ...prevState, formVisible: true }))
        }
      />{" "}
      <DefaultButton text="Submit" onClick={handleStorySubmit} />
    </div>
  );

  return <section>{formVisible ? articleForm : preview}</section>;
}
