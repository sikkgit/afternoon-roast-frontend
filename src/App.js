import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";
import Paper from "@material-ui/core/Paper";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Logo from "./components/Logo/Logo";
import theme from "./theme";
import NewStoryContainer from "./components/NewStoryContainer/NewStoryContainer";
import NewNewsletterContainer from "./components/NewNewsletterContainer/NewNewsletterContainer";
import { useContext, useEffect } from "react";
import { StoriesContext } from "./context/StoriesContext";
import NotFoundContainer from "./components/NotFoundContainer/NotFoundContainer";
import StoryContainer from "./components/StoryContainer/StoryContainer";
import { NewslettersContext } from "./context/NewslettersContext";
import NewsletterContainer from "./components/NewsletterContainer/NewsletterContainer";
import { fetchStories, fetchNewsletters } from "./utils/fetches";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 800,
    margin: "50px auto",
    padding: "30px 30px 40px",
    borderRadius: 20,
  },
}));

function App() {
  const { container } = useStyles();
  const [stories, setStories] = useContext(StoriesContext);
  const [newsletters, setNewsletters] = useContext(NewslettersContext);

  useEffect(() => {
    fetchStories().then((result) => setStories(result));
    fetchNewsletters().then((result) => setNewsletters(result));
  }, [setStories, setNewsletters]);

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
            <Route
              path="/edit-story/:id"
              component={() => <NewStoryContainer edit />}
            />
            <Route path="/newsletters/:id" component={NewsletterContainer} />
            <Route path="/" exact component={MainContainer} />
            <Route path="*" component={NotFoundContainer} />
          </Switch>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
