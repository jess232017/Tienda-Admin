import React from 'react';

import { useHistory } from "react-router-dom";
import { Column, MasterDetail } from 'devextreme-react/data-grid';

import EditionLayout, { itemDialog, itemTool }  from 'src/layouts/admin/EditionLayout';
import api from 'src/services/api/tasks/ApiFactura';

//
import FormCaja from 'src/forms/FormCaja';

const Caja = () => {
    const columns = [
        <Column dataField="cajaId"  key="cajaId"/>, 
        <Column dataField="descripcion"  key="descripcion"/>, 
        <Column dataField="serial_PC"  key="serial_PC"/>, 
        <Column dataField="impresora_Ticket"  key="impresora_Ticket"/>, 
        <Column dataField="impresora_A4"  key="impresora_A4"/>, 
        <Column dataField="estado"  key="estado"/>, 
    ];

    const tools = [
        itemDialog("Agregar", "add", FormCaja, "Agregar Caja", "post", "cajaId"),
        itemDialog("Editar", "edit", FormCaja, "Editar Caja", "put", "cajaId"),
        itemDialog("Eliminar", "trash", FormCaja, "Eliminar Caja", "delete", "cajaId"),
    ]

    return ( 
        <EditionLayout
            titulo = "Gestión de Caja"
            subTitulo = "Listado de Caja"
            dataSource = {api.obtenerCaja}
            keyExpr = "cajaId"
            icon = "pi-desktop"
            columns = {columns}
            tools = {tools}
        />
    );
}
 
export default Caja;