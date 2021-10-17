import React from 'react';

import { useHistory } from "react-router-dom";
import { Column, MasterDetail } from 'devextreme-react/data-grid';

import EditionLayout, { itemDialog, itemTool }  from 'src/layouts/admin/EditionLayout';
import api from 'src/services/api/tasks/ApiFactura';

//
import FormInventario from 'src/forms/FormInventario';

const Inventario = () => {
    const columns = [
        <Column dataField="inventarioId"  key="inventarioId" width ={100}/>, 
        <Column dataField="movimientoId"  key="movimientoId" width ={100}/>, 
        <Column dataField="loteId"  key="loteId" width ={100}/>, 
        <Column dataField="motivo"  key="motivo"/>, 
        <Column dataField="fecha"  key="fecha"/>, 
        <Column dataField="estado"  key="estado" width ={60}/>, 
        <Column dataField="cantidad"  key="cantidad" width ={80}/>, 
        <Column dataField="costoUnit"  key="costoUnit" width ={80}/>, 
        <Column dataField="subTotal"  key="subTotal" width ={80}/>, 
        <Column dataField="total"  key="total" width ={80}/>, 
        <Column dataField="nota"  key="nota" width ={80}/>, 
        <Column dataField="movimiento"  key="movimiento"/>, 
        <Column dataField="lote"  key="lote"/>, 
    ];

    const tools = [
        itemDialog("Agregar", "add", FormInventario, "Agregar Inventario", "post", "InventarioId"),
        itemDialog("Editar", "edit", FormInventario, "Editar Inventario", "put", "InventarioId"),
        itemDialog("Eliminar", "trash", FormInventario, "Eliminar Inventario", "delete", "InventarioId"),
    ];

    return ( 
        <EditionLayout
            titulo = "Gestión de Inventario"
            subTitulo = "Listado de Inventario"
            dataSource = {api.obtenerInventario}
            keyExpr = "inventarioId"
            icon = "pi-credit-card"
            columns = {columns}
            tools = {tools}
        />
    );    
}
 
export default Inventario;  