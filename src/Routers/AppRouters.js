import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Components/NavBar/NavBar";
import Inicio from "../Components/Inicio/Inicio";

export default function AppRouters() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Inicio} />
      </Switch>
    </Router>
  );
}
