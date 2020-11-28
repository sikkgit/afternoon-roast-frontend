import Axios from "axios";
import { BACKEND_BASE_URL } from "./constants";

const fetchStories = async () => {
  try {
    const response = await Axios.get(`${BACKEND_BASE_URL}/stories`);
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchStory = async (id) => {
  try {
    const response = await Axios.get(`${BACKEND_BASE_URL}/stories/${id}`);
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const postStory = async (story) => {
  try {
    const response = await Axios.post(`${BACKEND_BASE_URL}/stories`, story);
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const editStory = async (id, story) => {
  try {
    const response = await Axios.put(
      `${BACKEND_BASE_URL}/stories/${id}`,
      story
    );
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteStory = async (id) => {
  try {
    const response = await Axios.delete(`${BACKEND_BASE_URL}/stories/${id}`);
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchNewsletters = async () => {
  try {
    const response = await Axios.get(`${BACKEND_BASE_URL}/newsletters`);
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchNewsletter = async (id) => {
  try {
    const response = await Axios.get(`${BACKEND_BASE_URL}/newsletters/${id}`);
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const postNewsletter = async (newsletter) => {
  try {
    const response = await Axios.post(
      `${BACKEND_BASE_URL}/newsletters`,
      newsletter
    );
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteNewsletter = async (id) => {
  try {
    const response = await Axios.delete(
      `${BACKEND_BASE_URL}/newsletters/${id}`
    );
    const { data } = await response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchStories,
  fetchNewsletters,
  fetchNewsletter,
  fetchStory,
  postStory,
  editStory,
  postNewsletter,
  deleteStory,
  deleteNewsletter,
};
