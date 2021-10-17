import React, {useState} from 'react';

import DataGrid, { Editing, Grouping, GroupPanel, Pager, Paging, ColumnChooser } from 'devextreme-react/data-grid';
import {  FilterRow, SearchPanel } from 'devextreme-react/data-grid';

import { show } from '@ebay/nice-modal-react';
import { Skeleton } from 'primereact/skeleton';
import usePaginator from 'src/hooks/usePaginator';
import ctxSelected from 'src/services/context/ctxSelected';

const EditionLayout = ({titulo, subTitulo, icon, useAxiosQuery, columns, tools }) => {
    const {Paginator, data, isSuccess, isError, isLoading} = usePaginator("get", "/Factura", "testeo");
    //const {data, isSuccess, isError, isLoading} = useAxiosQuery();

    //cambia la Toolbar por los tools del parametro 
    const onToolbarPreparing = (e) =>{
        const toolbarItems = e.toolbarOptions.items;
        toolbarItems.unshift(...tools);
    }

    const {setData} = ctxSelected();

    const onSelectionChanged = ({ selectedRowsData }) =>{
        const data = selectedRowsData[0];
        setData(data);
    }

    return ( 
        <div className="card">
            <div className="card-header">
                <div className="card-title">
                    <i className={`pi ${ icon ?? "pi-table"} p-mr-2`}></i>
                    {titulo}
                </div>
                <div className="mb-0 card-subtitle">{(isLoading ? "Cargando..." : subTitulo)}</div>
            </div>

            <div className="card-body">
                {isLoading ?
                    <>
                        <div className="p-d-flex p-jc-between p-mt-3 p-mb-3">
                            <div className="p-d-flex">
                                <Skeleton width="7rem" height="2rem" className="mr-2"></Skeleton>
                                <Skeleton width="7rem" height="2rem" className="mr-2"></Skeleton>
                                <Skeleton width="7rem" height="2rem" className="mr-2"></Skeleton>
                            </div>
                            <div className="p-d-flex">
                                <Skeleton width="2.4rem" height="2rem" className="mr-3"></Skeleton>
                                <Skeleton width="10rem" height="2rem"></Skeleton>
                            </div>
                        </div>
                        <Skeleton width="100%" height="18rem"></Skeleton>
                        <div className="p-d-flex p-jc-between p-mt-3">
                            <Skeleton width="9rem" height="2rem"></Skeleton>
                            <Skeleton width="25rem" height="2rem"></Skeleton>
                        </div>
                    </>
                :isError ?
                    <p>Error al cargar</p>
                :
                    <DataGrid
                        width = "100%"
                        id="gridContainer"
                        showBorders={true}
                        columnAutoWidth={true}
                        hoverStateEnabled={true}
                        focusedRowEnabled={true}
                        errorRowEnabled = {false}
                        allowColumnResizing={true}
                        rowAlternationEnabled={true}
                        columnHidingEnabled={true}
                        allowColumnReordering={true}
                        onSelectionChanged={onSelectionChanged}
                        selection={{ mode: 'single' }}
                        onToolbarPreparing = {onToolbarPreparing}
                        dataSource = { (isSuccess) ? data["data"] : Array(1)}
                        noDataText = {(isLoading) ? "Cargando..." : "No se encontraron resultados"}>
                            
                        <FilterRow visible={false} />

                        <ColumnChooser enabled={true}
                            title="Selector de Columna"
                            emptyPanelText="Arrastre una columna aqui para ocultarla"
                            allowSearch={true}/>
                        
                        <Grouping contextMenuEnabled={true} expandMode="rowClick" />
                        <Editing  allowAdding={false} allowUpdating={false} mode="batch" />
                        <GroupPanel visible={false} emptyPanelText="Utilice el menú contextual de las columnas de encabezado para agrupar datos" />
                        
                        <SearchPanel 
                            visible={true}
                            placeholder="Buscar..."/>

                        <Pager
                            allowedPageSizes={[5, 8, 15, 30]}
                            showInfo={false}
                            showNavigationButtons={true}
                            showPageSizeSelector={true}
                            visible={false}/>

                        <Paging 
                            defaultPageSize={8} />

                        {columns}
                    </DataGrid>
                }

                <Paginator/>
            </div>
        </div>
    );
}

const itemDialog = (text, icon, Template, title, method, queryKey) => ({
    location: "before",
    widget: "dxButton",
    locateInMenu: "auto",
    options:{
        icon,
        text,
        type:"default",
        stylingMode: "outlined",
        onClick: () => show(Template, {title, method, queryKey}),
    }
});

const itemTool = ( text, icon, onClick) => {
    return {
        location: "before",
        widget: "dxButton",
        locateInMenu: "auto",
        options:{
            icon,
            text,
            onClick,
            type:"default",
            stylingMode: "outlined"
        }
    }
}

export {itemDialog, itemTool}
export default EditionLayout;