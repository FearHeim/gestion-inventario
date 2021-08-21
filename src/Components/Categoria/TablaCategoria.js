import React, { useEffect, useState } from "react";
import { Grid, Modal, Snackbar } from "@material-ui/core";
//import Alert from "@material-ui/lab/Alert";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";

export default function TablaCategoria(props) {
  return (
    <div>
      <Grid
        container
        className="grid-container-user-buscar"
        justifyContent="space-between"
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
          justifyContent="flex-end"
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
      <TableContainer style={{ maxHeight: 300, width: "100%" }}>
        <Table stickyHeader>
          <TableHead className="TableHead">
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Nombre Categorìa</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {documentos
              .filter((doc) => {
                if (doc.rol_usuario === "admin") return doc;
              })
              .map((doc) => (
                <TableRow key={doc._id}>
                  <TableCell>{doc.ced_usuario}</TableCell>
                  <TableCell>{doc.nomb_usuario}</TableCell>
                  <TableCell>{doc.apell_usuario}</TableCell>
                  <TableCell>{doc.email_usuario}</TableCell>
                  <TableCell>**********</TableCell>
                  <TableCell>
                    <button onClick={() => IdEdit(doc)}>Edit</button>
                    <button onClick={() => IdElimina(doc._id)}>Del</button>
                  </TableCell>
                </TableRow>
              ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
