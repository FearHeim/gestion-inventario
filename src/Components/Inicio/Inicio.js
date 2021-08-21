import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";
import userLogo from "../../assets/img/user_vector.png";
import categoryLogo from "../../assets/img/category_vector.png";
import productoLogo from "../../assets/img/product_vector.png";

import "./Inicio.css";

function Inicio() {
  return (
    <Container className="container-admin">
      <Grid container className="grid-container-admin">
        <Grid item className="grid-item-admin grid-item-admin-title">
          <div className="grid-item-title">
            <Typography className="title">Opciones de administrador</Typography>
          </div>
        </Grid>
        <Grid item className="grid-item-admin grid-item-admin-logo">
          <Grid
            container
            className="grid-container-adminLogo"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Link to={`/Usuario`}>
              <Grid item>
                <div className="div-logo">
                  <img src={userLogo} alt="Logo-usuario"></img>
                </div>
                <div>
                  <h3>Usuarios</h3>
                </div>
              </Grid>
            </Link>
            <Link to={`/Categorias`}>
              <Grid item>
                <div className="div-logo">
                  <img src={categoryLogo} alt="Logo-usuario"></img>
                </div>
                <div>
                  <h3>Categorías</h3>
                </div>
              </Grid>
            </Link>
            <Link to={`/Productos`}>
              <Grid item>
                <div className="div-logo">
                  <img src={productoLogo} alt="Logo-usuario"></img>
                </div>
                <div>
                  <h3>Productos</h3>
                </div>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Inicio;
