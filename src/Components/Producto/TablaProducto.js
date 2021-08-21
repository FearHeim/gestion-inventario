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

export default function TablaProducto(props) {
  return (
    <div>
      <TableContainer style={{ maxHeight: 300, width: "100%" }}>
        <Table stickyHeader>
          <TableHead className="TableHead">
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Cantidad</TableCell>
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
