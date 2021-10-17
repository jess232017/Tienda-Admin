import React from 'react';

import { useHistory } from "react-router-dom";
import { Column, MasterDetail } from 'devextreme-react/data-grid';

import EditionLayout, { itemDialog, itemTool }  from 'src/layouts/admin/EditionLayout';
import api from 'src/services/api/tasks/ApiFactura';

//

const Movimiento = () => {
    const tools = [
    
    ];

    return ( 
        <EditionLayout
            titulo = "Gestión de Movimiento"
            subTitulo = "Listado de Movimiento"
            dataSource = {api.obtenerMovimiento}
            keyExpr = "movimientoId"
            icon = "pi-book"
            columns = {[
                <Column dataField="movimientoId"  key="movimientoId" width={105}/>, 
                <Column dataField="empleadoId"  key="empleadoId" width={95}/>, 
                <Column dataField="MovimientoId"  key="MovimientoId" width={75}/>, 
                <Column dataField="estado"  key="estado" width={75}/>, 
                <Column dataField="fechaInicio"  key="fechaInicio" width={105}/>, 
                <Column dataField="fechaFin"  key="fechaFin" width={105}/>, 
                <Column dataField="dineroInicial"  key="dineroInicial" width={90}/>, 
                <Column dataField="dineroCierre"  key="dineroCierre" width={90}/>, 
                <Column dataField="saldo"  key="saldo" width={75}/>, 
                <Column dataField="diferencia"  key="diferencia" width={75}/>, 
                <Column dataField="Movimiento"  key="Movimiento" width={75}/>, 
                <Column dataField="empleado"  key="empleado" width={75}/>, 
                <Column dataField="contables"  key="contables" width={75}/>, 
                <Column dataField="inventarios"  key="inventarios" width={75}/>,
            ]}
            tools = {tools}
        />
    );
}
 
export default Movimiento;