import React from 'react'
import FormDialog from 'src/components/FormDialog';
import {SimpleItem, GroupItem} from 'devextreme-react/form';

import NiceModal from '@ebay/nice-modal-react';

//
import ctxSelected from 'src/services/context/ctxSelected';

const FormCaja = NiceModal.create( ({title, method}) =>{
    const {data: json} = ctxSelected();

    const callback = (data) =>{
        console.log(data);
    }

    console.log(json);

    return (
        <FormDialog
            title= {title}
            callback= {callback}
            data = {json}
        >
            <GroupItem cssClass="first-group">
                <SimpleItem dataField="CajaId"
                    editorOptions={{ disabled: true }} />
                <GroupItem colCount={2}>
                    <SimpleItem isRequired
                        dataField="Descripcion" />
                    <SimpleItem dataField="SerialPC"/>
                    <SimpleItem dataField="Impresora Ticket"/>
                    <SimpleItem dataField="Impresora A4"/>
                    <SimpleItem dataField="Estado"
                        editorType="dxCheckBox"/>
                </GroupItem>
            </GroupItem>
        </FormDialog>
    )
});

export default FormCaja;