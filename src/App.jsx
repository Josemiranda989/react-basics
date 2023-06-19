import ClassComponent from "./components/ClassComponent/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { Navbar } from "./components/Navbar/Navbar";
import { Styling } from "./components/Styling";

import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <h1>This is the home page</h1>
            </>
          )}
        />

        <Route path="/styles" component={Styling} />
        <Route path="/class" component={ClassComponent} />
        <Route path="/functional" component={FunctionalComponent} />
      </Switch>
    </>
  );
}

export default App;
