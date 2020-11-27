import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./components/Logo/Logo";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import NewStoryContainer from "./components/NewStoryContainer/NewStoryContainer";
import NewNewsletterContainer from "./components/NewNewsletterContainer/NewNewsletterContainer";
import { useContext, useEffect } from "react";
import { StoriesContext } from "./context/StoriesContext";
import Axios from "axios";
import { BACKEND_BASE_URL } from "./utils/constants";
import NotFoundContainer from "./components/NotFoundContainer/NotFoundContainer";
import StoryContainer from "./components/StoryContainer/StoryContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    margin: "50px auto",
    padding: 25,
  },
}));

function App() {
  const { container } = useStyles();
  const [stories, setStories] = useContext(StoriesContext);

  useEffect(() => {
    async function fetchStories() {
      try {
        const response = await Axios.get(`${BACKEND_BASE_URL}/stories`);
        const { data } = await response;
        return data;
      } catch (error) {
        console.log(error);
      }
    }

    fetchStories().then((result) => setStories(result));
  }, [setStories]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />

        <Paper elevation={3} className={container}>
          <Logo size={"50%"} />

          <Switch>
            <Route path="/new-story" exact component={NewStoryContainer} />
            <Route
              path="/new-newsletter"
              exact
              component={NewNewsletterContainer}
            />
            <Route path="/stories/:id" component={StoryContainer} />
            <Route path="/" exact component={MainContainer} />
            <Route path="*" component={NotFoundContainer} />
          </Switch>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
