import React from 'react';

import DataGrid, { Scrolling } from 'devextreme-react/data-grid';


const Detalle = ({data}) => {
    const {data : parentData } = data;
    const { cliente, detalles: source} = parentData;

    console.log(cliente, source);
    
    return ( 
        <React.Fragment>
            <div className="master-detail-caption">
                {`Productos vendidos a ${cliente}`}
            </div>
            <DataGrid
                style = {{maxHeight : "20rem"}}
                keyExpr = {"detalleId"}
                showBorders={true}
                dataSource = {source}
                columnAutoWidth={true}
                hoverStateEnabled={true}
                focusedRowEnabled={true}
                allowColumnResizing={true}
                columnHidingEnabled={true}
                allowColumnReordering={true}
                selection={{ mode: 'single' }}
            >
                <Scrolling mode="virtual" />
                
            </DataGrid>
        </React.Fragment>
    );
}
 
export default Detalle;