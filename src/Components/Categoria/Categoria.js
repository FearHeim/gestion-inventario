import React, { useState } from "react";
import { Container, Grid, Typography, Snackbar } from "@material-ui/core";
import TablaCategoria from "./TablaCategoria";
import "../componentes.css";

function Categoria() {
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
            <Typography className="title">Agregar categoría</Typography>
          </div>
          <Grid item className="grid-item-user-data">
            <form
              method="post"
              //onSubmit={handleSubmit}
            >
              <Grid container className="grid-container-user-data">
                <Grid item className="grid-item-info">
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="nomb_categoria"
                    //value={datos.nomb_usuario}
                    required
                    //onChange={handleInputChange}
                  />
                </Grid>
                <Grid item className="grid-item-info">
                  <label>Codigo</label>
                  <input
                    type="text"
                    name="cod_categoria"
                    //value={datos.apell_usuario}
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
            <Typography className="title">Búsqueda de categoría</Typography>
          </div>
          <Grid item className="grid-item-user-buscar">
            <Grid item className="grid-item-user-tabla">
              <TablaCategoria stado={stado} />
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

export default Categoria;
