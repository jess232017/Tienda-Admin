import React from 'react';

import { useHistory } from "react-router-dom";
import { Column, MasterDetail } from 'devextreme-react/data-grid';

import EditionLayout, { itemDialog, itemTool }  from 'src/layouts/admin/EditionLayout';
import api from 'src/services/api/tasks/ApiProducto';

//otros
import { Avatar } from 'primereact/avatar';
import FormProducto from 'src/forms/FormProducto';

const Producto = () => {

    const tools = [
        itemDialog("Agregar", "add", FormProducto, "Agregar Producto", "post", "ProductoId"),
        itemDialog("Editar", "edit", FormProducto, "Editar Producto", "put", "ProductoId"),
        itemDialog("Eliminar", "trash", FormProducto, "Eliminar Producto", "delete", "ProductoId"),
    ];

    const columns = [
        <Column dataField="productoId"  key="productoId"  width={95}/>, 
        <Column caption="Descripcion" key="head-description">
            <Column dataField="imagen"  key="imagen" cellRender = {renderImage} width={70}/>, 
            <Column dataField="descripcion" caption="Nombre" key="descripcion" width={150}/>, 
            <Column dataField="marca"  key="marca" width={140}/>, 
            <Column dataField="codigoQR"  key="codigoQR" width={75}/>, 
        </Column>,
        <Column caption="Inventario" key="head-inventary">
            <Column dataField="categoria"  key="categoria" width={75}/>, 
            <Column dataField="inventariado"  key="inventariado" width={95}/>, 
            <Column dataField="stockMinimo"  key="stockMinimo" width={75}/>, 
            <Column dataField="cantidad"  key="cantidad" width={75}/>, 
            <Column dataField="granel"  key="granel" width={75}/>, 
        </Column>,
        <Column dataField="precioVenta"  key="precioVenta" width={95}/>, 
        <Column dataField="lotes"  key="lotes" width={75}/>, 
    ];

    return ( 
        <EditionLayout
            titulo = "Gestión de Producto"
            subTitulo = "Listado de Producto"
            dataSource = {api.obtenerProducto}
            keyExpr = "productoId"
            columns = {columns}
            tools = {tools}
            icon = "pi-tag"
        />
    );
}

function renderImage({value}) {
    //<img src={`data=image/jpeg;base64,${data}`} />
    return <div style={{width : "100%", textAlign: "center"}}>
        <Avatar image={`data=image/jpeg;base64,${value}`} imageAlt="..." style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
    </div>
}
 
export default Producto;
