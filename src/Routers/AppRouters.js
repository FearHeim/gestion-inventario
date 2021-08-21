import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Components/NavBar/NavBar";
import Inicio from "../Components/Inicio/Inicio";
import Usuario from "../Components/Usuario/Usuario";
import Categoria from "../Components/Categoria/Categoria";
import Producto from "../Components/Producto/Producto";

export default function AppRouters() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/Usuarios" exact component={Usuario} />
        <Route path="/Categorias" exact component={Categoria} />
        <Route path="/Productos" exact component={Producto} />
      </Switch>
    </Router>
  );
}
