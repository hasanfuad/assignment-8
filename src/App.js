import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import TeamInfo from "./components/TeamInfo/TeamInfo";

import image from "./components/Home/stadium1.jpg"

function App() {

  return (
    <div className="App">
      <div className="top-banner">
        <img src={image} alt="stadium" />
      </div>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/teamInfo/:teamId">
            <TeamInfo />
          </Route>

          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
