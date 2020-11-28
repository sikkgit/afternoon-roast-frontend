import { Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NewslettersContext } from "../../context/NewslettersContext";
import { StoriesContext } from "../../context/StoriesContext";
import DefaultButton from "../DefaultButton/DefaultButton";
import DefaultDatePicker from "../DefaultDatePicker/DefaultDatePicker";
import DefaultTextField from "../DefaultTextField/DefaultTextField";
import Newsletter from "../Newsletter/Newsletter";
import RichTextEditor from "../RichTextEditor/RichTextEditor";

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

  useEffect(() => {
    const newsletterFound = newsletters.find((n) => n.formatted_date === date);
    setExistingNewsletter(newsletterFound);

    const storiesFound = stories.filter((s) => s.formatted_date === date);
    setStoriesToPublish(storiesFound);

    if (newsletterFound || !storiesFound.length) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, [date, setDisableSubmit]);

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
            <Typography variant="body2" color="inherit">
              This issue will include the following stories:
            </Typography>

            {storiesToPublish.map(({ id, title }) => (
              <Typography variant="body2" color="inherit" key={id}>
                <li>{title}</li>
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
        label="Newsletter Title"
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
          Description:
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

  const preview = (
    <div onClick={() => setFormVisible(true)}>
      <Newsletter {...{ title, description, date, storiesToPublish }} />
    </div>
  );

  return <section>{formVisible ? newsletterForm : preview}</section>;
}
