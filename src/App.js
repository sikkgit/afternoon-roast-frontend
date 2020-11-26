import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from "react-router-dom";
import MainContainer from './components/MainContainer/MainContainer'

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route path="/" exact component={MainContainer} />
      </Switch>
    </div>
  );
}

export default App;
