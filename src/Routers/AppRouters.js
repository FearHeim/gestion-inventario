import { BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "../Components/NavBar/NavBar";

export default function AppRouters() {
  return (
    <Router>
      <Switch>
        <Header />
      </Switch>
    </Router>
  );
}
