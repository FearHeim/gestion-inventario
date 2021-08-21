import React, { useState } from "react";
import { Container, Grid, Typography, Snackbar } from "@material-ui/core";
import "../componentes.css";
import TablaUsuarios from "./TablaUsuarios";

function Usuario() {
  const [stado, setStado] = useState(false);
  return (
    <Container className="container">
      <Grid
        container
        justifyContent="space-between"
        className="grid-container-add-user"
      >
        <Grid item className="grid-item-user-4">
          <div className="grid-item-title-user">
            <Typography className="title">Agregar usuario</Typography>
          </div>
          <Grid item className="grid-item-user-data">
            <form
              method="post"
              //onSubmit={handleSubmit}
            >
              <Grid container className="grid-container-user-data">
                <Grid item className="grid-item-info">
                  <label>Nombres</label>
                  <input
                    type="text"
                    name="nomb_usuario"
                    //value={datos.nomb_usuario}
                    required
                    //onChange={handleInputChange}
                  />
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Apellidos</label>
                  <input
                    type="text"
                    name="apell_usuario"
                    //value={datos.apell_usuario}
                    required
                    //onChange={handleInputChange}
                  />
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Cédula/RUC</label>
                  <input
                    type="text"
                    name="ced_usuario"
                    //value={datos.ced_usuario}
                    required
                    //onChange={handleInputChange}
                  />
                </Grid>
                <Grid item className="grid-item-info">
                  <label>E-mail*</label>
                  <input
                    type="text"
                    name="email_usuario"
                    //value={datos.email_usuario}
                    required
                    //onChange={handleInputChange}
                  />
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Contraseña </label>
                  <input
                    type="password"
                    name="contraseña_usuario"
                    //value={datos.contraseña_usuario}
                    required
                    //onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                className="grid-container-user-btn"
                justifyContent="flex-end"
                alignItems="center"
              >
                <button type="submit">Agregar</button>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid item className="grid-item-user-6">
          <div className="grid-item-title-user">
            <Typography className="title">Búsqueda de usuario</Typography>
          </div>
          <Grid item className="grid-item-user-buscar">
            <Grid item className="grid-item-user-tabla">
              <TablaUsuarios stado={stado} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert variant="filled" onClose={handleCloseAlert} severity="success">
          El usuario se creó correctamente.
        </Alert>
      </Snackbar> */}
    </Container>
  );
}

export default Usuario;
