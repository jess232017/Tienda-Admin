import React from 'react';

import DataGrid, {
    Pager,
    Paging,
    Editing,
    Grouping,
    FilterRow,
    GroupPanel,
    SearchPanel,
    ColumnChooser } from 'devextreme-react/data-grid';

const PageTable = ({tools, data, isLoading, setSelect, children}) => {
    const onToolbarPreparing = (e) =>{
        const toolbarItems = e.toolbarOptions.items;
        toolbarItems.unshift(...tools);
    }

    const onSelectionChanged = ({ selectedRowsData }) =>{
        const data = selectedRowsData[0];
        setSelect(data);
    }

    return ( 
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
            selection={{ mode: 'single' }}
            onSelectionChanged={onSelectionChanged}
            onToolbarPreparing = {onToolbarPreparing}
            dataSource = {data?.data}
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

            {children}
        </DataGrid>
    );
}
 
export default PageTable;