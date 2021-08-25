import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import Cards from "./components/cards";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/cards" component={Cards} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
