import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Modal,
  Snackbar,
} from "@material-ui/core";
//import axios from "axios";
//import Alert from "@material-ui/lab/Alert";
import TablaProducto from "./TablaProducto";

import "../componentes.css";

function Producto() {
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [stado, setStado] = useState(false);
  const [valorBusqueda, setValorBusqueda] = useState({});
  return (
    <Container className="container container-user">
      <Grid container className="">
        <Grid item container className="grid-item-produc-4" xs={12}>
          <Grid item className="grip-agrega-produc">
            <div className="grid-item-title-user">
              <Typography className="title">Agregar producto</Typography>
            </div>
            <Grid item className="grid-item-user-data">
              <Grid
                container
                className="grid-container-user-btn"
                alignItems="center"
              >
                <button
                //onClick={AbreElIngreso}
                >
                  Nuevo
                </button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className="grip-busca-produc">
            <div className="grid-item-title-user">
              <Typography className="title">Búsqueda de producto</Typography>
            </div>

            <Grid
              container
              className="grid-container-user-buscar"
              alignItems="center"
            >
              <Grid item className="grid-item-user-label">
                <label>Código:</label>
              </Grid>
              <Grid item className="grid-item-user-input">
                <input
                  type="text"
                  //value={buscar}
                  //onChange={handleChangeBusqueda}
                ></input>
              </Grid>
              <Grid
                item
                className="grid-container-user-btn"
                alignItems="center"
              >
                <button
                //onClick={handleSubmitBusqueda}
                >
                  Buscar
                </button>
                <button
                  onClick={() => {
                    //setEtado(!estado);
                    //setBuscar("");
                  }}
                >
                  Limpiar
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="grid-item-produc-6" xs={12}>
          <Grid item className="grid-item-user-tabla">
            <TablaProducto stado={stado} valorBusqueda={valorBusqueda} />
          </Grid>
        </Grid>
      </Grid>

      {/* <Modal
        open={openModal}
        //onClose={handleClose}
        className="ModalPadreRegi"
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyAgregar}
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert variant="filled" onClose="" severity="success">
          El producto se agregó correctamente.
        </Alert>
      </Snackbar> */}
    </Container>
  );
}

export default Producto;
