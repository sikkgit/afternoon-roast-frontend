import React, { useState, createContext } from "react";

export const NewslettersContext = createContext();

export const NewslettersProvider = (props) => {
  const [newsletters, setNewsletters] = useState([]);

  return (
    <NewslettersContext.Provider value={[newsletters, setNewsletters]}>
      {props.children}
    </NewslettersContext.Provider>
  );
};
