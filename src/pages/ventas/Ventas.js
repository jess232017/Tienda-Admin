import React from 'react';

import { useHistory } from "react-router-dom";
import { Column, MasterDetail } from 'devextreme-react/data-grid';

import EditionLayout, { itemDialog, itemTool }  from 'src/layouts/admin/EditionLayout';
import api from 'src/services/api/tasks/ApiFactura';

//
import { Badge } from 'primereact/badge';
import FormCaja from 'src/forms/FormCaja';
import Detalle from "./Detalle";

const Ventas = () => {
    let history = useHistory();

    const btnTomar = () => {
        history.push("/admin/venta/nueva");
    }

    const columns = [
        <Column dataField="facturaId" key="facturaId" width={75} caption="Id Recibo"/>,
        <Column caption="Responsables" key="Responsables">
            <Column dataField="vendedor" key="vendedor" caption="Vendedor" width={130} />,
            <Column dataField="cliente" key="cliente" caption="Cliente" width={130}/>,
        </Column>,
        <Column caption="Contabilidad" key="Contabilidad">
            <Column dataField="fechaVenta" key="fechaVenta" dataType="date" />,
            <Column dataField="formaPago" key="formaPago" caption="Tipo Pago" width={100} />,
            <Column dataField="subTotal" key="subTotal" format="currency" />,
            <Column dataField="pagoCon" key="pagoCon" format="currency" />,
            <Column dataField="estado" key="estado" cellRender ={cellRender}/>,
        </Column>,
        <Column dataField="comentario" key="comentario" format="currency" />,
        <MasterDetail
            key = "detalles"
            enabled={true}
            component={Detalle}
        />
    ];

    const tools = [
        itemTool('Tomar Venta', 'plus', btnTomar),
        itemTool('En Espera', 'clock', btnTomar),
        itemTool('Refrescar', 'refresh', btnTomar),
    ]

    return (
        <>
        <EditionLayout
            titulo = "Gestión de Ventas"
            subTitulo = "Listado de Ventas"
            useAxiosQuery = {api.obtenerFactura}
            icon = "pi-shopping-cart"
            keyExpr = "facturaId"
            columns = {columns}
            tools = {tools}
        />
            
        </>
    );
}
 
export default Ventas;

function cellRender({value}) {
    const severity = (value === "PAGADO") ? "success" : "warning";
    return <Badge value={value} severity ={severity}></Badge>
}
