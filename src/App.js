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

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    margin: "50px auto",
    padding: 25,
  },
}));

function App() {
  const { container } = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />

        <Paper elevation={3} className={container}>
          <Logo size={"50%"} />

          <Switch>
            <Route path="/" exact component={MainContainer} />
            <Route path="/new-story" exact component={NewStoryContainer} />
            <Route
              path="/new-newsletter"
              exact
              component={NewNewsletterContainer}
            />
          </Switch>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
