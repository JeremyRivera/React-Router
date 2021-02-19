import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={"/about"}>
            <About text="sdjfkl" />
          </Route>
          <Route path={"/portfolio"}>
            <Portfolio text="fdjklsh" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
