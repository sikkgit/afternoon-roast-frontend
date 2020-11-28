import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { NewslettersContext } from "../../context/NewslettersContext";
import { fetchNewsletter, deleteNewsletter } from "../../utils/fetches";
import DefaultButton from "../DefaultButton/DefaultButton";
import Newsletter from "../Newsletter/Newsletter";

export default function NewsletterContainer() {
  const { id } = useParams();
  const history = useHistory();

  const [newsletter, setNewsletter] = useState(null);
  const [newsletters, setNewsletters] = useContext(NewslettersContext);

  useEffect(() => {
    fetchNewsletter(id).then((data) => {
      if (data) {
        data.error ? console.log(data.error) : setNewsletter(data);
      }
    });
  }, [setNewsletter, id]);

  const displayNewsletter = () => {
    if (newsletter) {
      const {
        title,
        description,
        formatted_date: date,
        stories: storiesToPublish,
      } = newsletter;

      return <Newsletter {...{ title, description, date, storiesToPublish }} />;
    }
  };

  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to permanently delete this newsletter?"
      )
    ) {
      const data = await deleteNewsletter(id);
      if (data) {
        data.error
          ? console.log(data.error)
          : setNewsletters((prevNewsletters) =>
              prevNewsletters.filter((n) => n.id !== parseInt(id))
            );
      }

      history.push("/");
    }
  };

  return (
    <section style={{ textAlign: "right" }}>
      <DefaultButton text="Delete" onClick={handleDelete} />
      {displayNewsletter()}
    </section>
  );
}
