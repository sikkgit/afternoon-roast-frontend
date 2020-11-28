import { Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { NewslettersContext } from "../../context/NewslettersContext";
import { StoriesContext } from "../../context/StoriesContext";
import DefaultButton from "../DefaultButton/DefaultButton";
import DefaultDatePicker from "../DefaultDatePicker/DefaultDatePicker";
import DefaultTextField from "../DefaultTextField/DefaultTextField";
import Newsletter from "../Newsletter/Newsletter";
import RichTextEditor from "../RichTextEditor/RichTextEditor";
import { renderToString } from "react-dom/server";
import { postNewsletter } from "../../utils/fetches";

export default function NewNewsletterContainer() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [formVisible, setFormVisible] = useState(true);
  const [newsletters, setNewsletters] = useContext(NewslettersContext);
  const [stories, setStories] = useContext(StoriesContext);
  const [existingNewsletter, setExistingNewsletter] = useState(null);
  const [storiesToPublish, setStoriesToPublish] = useState([]);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let newsletterFound;
    let storiesFound;

    if (newsletters) {
      newsletterFound = newsletters.find((n) => n.formatted_date === date);
      setExistingNewsletter(newsletterFound);
    }

    if (stories) {
      storiesFound = stories.filter((s) => s.formatted_date === date);
      setStoriesToPublish(storiesFound);
    }

    if (newsletterFound || (storiesFound && !storiesFound.length)) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, [date, setDisableSubmit, newsletters, stories]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handlePreviewClick = () => setFormVisible(false);
  const handleDateChange = (e) => {
    const dateSelected = e.target.value;
    setDate(dateSelected);
  };

  const errorMessage = existingNewsletter && (
    <>
      <Typography variant="body2" color="primary">
        A newsletter with that issue date already exists:
      </Typography>
      <Link to={`/newsletters/${existingNewsletter.id}`}>
        {existingNewsletter.title}
      </Link>
    </>
  );

  const getStoriesLinks = () => {
    if (date) {
      if (storiesToPublish.length) {
        return (
          <>
            <Typography variant="body2" color="primary">
              This issue will include the following stories:
            </Typography>

            {storiesToPublish.map(({ id, title }) => (
              <Typography variant="body2" color="inherit" key={id}>
                <li>
                  <Link to={`/stories/${id}`} target="_blank">
                    {title}
                  </Link>
                </li>
              </Typography>
            ))}
          </>
        );
      } else {
        return (
          <Typography variant="body2" color="primary">
            No stories have been written yet for selected date.
          </Typography>
        );
      }
    }
  };

  const newsletterForm = (
    <form noValidate autoComplete="off">
      <DefaultTextField
        label="Enter Newsletter Title"
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <DefaultDatePicker
        label="Select Issue Date"
        onChange={handleDateChange}
        defaultValue={date}
      />
      <br />
      <br />
      <label>
        <Typography
          variant="body2"
          style={{ textAlign: "left", marginLeft: 15 }}
        >
          Enter Description:
        </Typography>

        <RichTextEditor
          value={description}
          setStateCallback={setDescription}
          size={200}
        />
      </label>

      <div style={{ marginBottom: 10 }}>
        {existingNewsletter ? errorMessage : getStoriesLinks()}
      </div>

      <DefaultButton
        text="Preview"
        onClick={handlePreviewClick}
        disabled={disableSubmit}
      />
    </form>
  );

  const assembledNewsletter = (
    <Newsletter {...{ title, description, date, storiesToPublish }} />
  );

  const handleNewsletterSubmit = async () => {
    const newNewsletter = {
      title,
      description,
      stories: storiesToPublish,
      html: renderToString(assembledNewsletter),
    };

    const data = await postNewsletter(newNewsletter);
    if (data.error) {
      console.log(data.error);
    } else {
      setNewsletters((prevNewsletters) => [data, ...prevNewsletters]);
    }

    history.push("/newsletters/" + data.id);
  };

  const preview = (
    <div>
      {assembledNewsletter}
      <DefaultButton text="Edit" onClick={() => setFormVisible(true)} />{" "}
      <DefaultButton text="Submit" onClick={handleNewsletterSubmit} />
    </div>
  );

  return <section>{formVisible ? newsletterForm : preview}</section>;
}
