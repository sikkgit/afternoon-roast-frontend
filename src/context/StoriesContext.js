import React, { useState, createContext } from "react";

export const StoriesContext = createContext();

export const StoriesProvider = (props) => {
  const [stories, setStories] = useState([]);

  return (
    <StoriesContext.Provider value={[stories, setStories]}>
      {props.children}
    </StoriesContext.Provider>
  );
};
