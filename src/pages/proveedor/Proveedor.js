import React from 'react';

import { useHistory } from "react-router-dom";
import { Column, MasterDetail } from 'devextreme-react/data-grid';

import EditionLayout, { itemDialog, itemTool }  from 'src/layouts/admin/EditionLayout';
import api from 'src/services/api/tasks/ApiFactura';

//
import FormProveedor from 'src/components/forms/FormProveedor';

const Proveedor = () => {

    const tools = [
        itemDialog("Agregar", "add", FormProveedor, "Agregar Proveedor", "post", "ProveedorId"),
        itemDialog("Editar", "edit", FormProveedor, "Editar Proveedor", "put", "ProveedorId"),
        itemDialog("Eliminar", "trash", FormProveedor, "Eliminar Proveedor", "delete", "ProveedorId"),
    ];

    return ( 
        <EditionLayout
            titulo = "Gestión de Proveedor"
            subTitulo = "Listado de Proveedor"
            dataSource = {api.obtenerProveedor}
            keyExpr = "proveedorId"
            columns = {[
                <Column dataField="proveedorId"  key="proveedorId" width={100}/>, 
                <Column dataField="empresa"  key="empresa" width={150}/>, 
                <Column dataField="contacto"  key="contacto" width={130}/>, 
                <Column dataField="direccion"  key="direccion" width={150}/>, 
                <Column dataField="estado"  key="estado" width={75}/>, 
                <Column dataField="celular"  key="celular" width={90}/>, 
                <Column dataField="foto"  key="foto" width={75}/>, 
                <Column dataField="lotes"  key="lotes" width={75}/>, 
            ]}
            tools = {tools}
            icon = "pi-user"
        />
    );
}
 
export default Proveedor;