import React from 'react'
import FormDialog from 'src/components/FormDialog';
import {SimpleItem, GroupItem} from 'devextreme-react/form';

import NiceModal from '@ebay/nice-modal-react';

const FormProducto = NiceModal.create( ({title, method}) =>{
    const callback = (data) =>{
        console.log(data);
    }

    return (
        <FormDialog
            title= {title}
            callback= {callback}
        >
            <GroupItem cssClass="first-group" colCount={3}>
                <GroupItem colSpan={2}>

                    <SimpleItem 
                        dataField="Descripcion"
                        itemType = "dxNumberBox"
                        isRequired />

                    <SimpleItem
                        dataField="CategoriaId">
                    </SimpleItem>

                    <SimpleItem 
                        dataField="PrecioVenta" 
                        itemType = "dxNumberBox"
                        isRequired/>

                    <SimpleItem isRequired
                        dataField="Cantidad"
                        itemType = "dxNumberBox"/>

                    <SimpleItem isRequired
                        dataField="Marca"/>
                    
                    <SimpleItem isRequired
                        dataField="StockMinimo"
                        itemType = "dxNumberBox"/>

                    <SimpleItem dataField="CodigoQr" isRequired/>
                    <SimpleItem dataField="Inventariado" editorType="dxCheckBox" />
                    
                    <SimpleItem dataField="Granel"  />

                    
                </GroupItem>
                
                <GroupItem>
                    <SimpleItem dataField="ProductoId"
                        editorOptions={{ disabled: true }} />
                </GroupItem>
            </GroupItem>
        </FormDialog>
    )
});

export default FormProducto;