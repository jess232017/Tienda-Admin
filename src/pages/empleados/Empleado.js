import React from 'react';

import { useHistory } from "react-router-dom";
import { Column, MasterDetail } from 'devextreme-react/data-grid';

import EditionLayout, { itemDialog, itemTool }  from 'src/layouts/admin/EditionLayout';
import api from 'src/services/api/tasks/ApiFactura';

//
import FormEmpleado from 'src/components/forms/FormEmpleado';

const Empleado = () => {
    const columns = [
        <Column dataField="empleadoId"  key="empleadoId" width={100}/>, 
        <Column dataField="tienda"  key="tienda" width={160}/>, 
        <Column dataField="rol"  key="rol" width={75}/>, 
        <Column dataField="nombres"  key="nombres" width={125}/>, 
        <Column dataField="apellidos"  key="apellidos" width={125}/>, 
        <Column dataField="usuario"  key="usuario" width={75}/>, 
        <Column dataField="clave"  key="clave" width={75}/>, 
        <Column dataField="foto"  key="foto" width={75}/>, 
        <Column dataField="estado"  key="estado" minWidth={75}/>, 
        <Column dataField="correo"  key="correo" width={185}/>, 
    ];

    const tools = [
        itemDialog("Agregar", "add", FormEmpleado, "Agregar Empleado", "post", "EmpleadoId"),
        itemDialog("Editar", "edit", FormEmpleado, "Editar Empleado", "put", "EmpleadoId"),
        itemDialog("Eliminar", "trash", FormEmpleado, "Eliminar Empleado", "delete", "EmpleadoId"),
    ];

    return (  
        <EditionLayout
            titulo = "Gestión de Empleado"
            subTitulo = "Listado de Empleado"
            dataSource = {api.obtenerEmpleado}
            keyExpr = "empleadoId"
            columns = {columns}
            icon = "pi-user"
            tools = {tools}
        />
    );
}
 
export default Empleado;