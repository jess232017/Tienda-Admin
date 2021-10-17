import React from 'react';

import { useHistory } from "react-router-dom";
import { Column, MasterDetail } from 'devextreme-react/data-grid';

import EditionLayout, { itemDialog, itemTool }  from 'src/layouts/admin/EditionLayout';
import api from 'src/services/api/tasks/ApiFactura';

//
import FormCliente from 'src/forms/FormCliente';

const Cliente = () => {
    const columns = [
        <Column dataField="clienteId"  key="clienteId" width ={75}/>, 
        <Column dataField="nombre"  key="nombre"/>, 
        <Column dataField="apellido"  key="apellido"/>, 
        <Column dataField="telefono"  key="telefono" width = {90}/>, 
        <Column dataField="estado"  key="estado"/>, 
        <Column dataField="imagen"  key="imagen"/>, 
        <Column dataField="facturas"  key="facturas"/>,
    ];

    const tools = [
        itemDialog("Agregar", "add", FormCliente, "Agregar Cliente", "post", "ClienteId"),
        itemDialog("Editar", "edit", FormCliente, "Editar Cliente", "put", "ClienteId"),
        itemDialog("Eliminar", "trash", FormCliente, "Eliminar Cliente", "delete", "ClienteId"),
    ];

    return (
        <EditionLayout
            titulo = "Gestión de Cliente"
            subTitulo = "Listado de Cliente"
            dataSource = {api.obtenerCliente}
            keyExpr = "clienteId"
            columns = {columns}
            icon = "pi-user"
            tools = {tools}
        />
    );
}
 
export default Cliente;