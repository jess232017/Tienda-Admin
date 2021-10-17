import React from 'react'
import FormDialog from 'src/components/FormDialog';
import {SimpleItem, GroupItem} from 'devextreme-react/form';
import {EmailRule, RequiredRule, AsyncRule, } from 'devextreme-react/form';

import NiceModal from '@ebay/nice-modal-react';

const FormEmpleado = NiceModal.create( ({title, method}) =>{
    const callback = (data) =>{
        console.log(data);
    }

    return (
        <FormDialog
            title= {title}
            callback= {callback}
        >
            <GroupItem cssClass="first-group" colCount={4}>
                <GroupItem colSpan={3}>
                    <SimpleItem isRequired
                        dataField="Nombre">
                    </SimpleItem>
                    <SimpleItem isRequired
                        dataField="Apellido" />
                    <SimpleItem isRequired
                        dataField="Tienda"
                        editorType="dxSelectBox" />
                    <SimpleItem isRequired
                        dataField="Rol"
                        editorType="dxSelectBox" />
                </GroupItem>

                <GroupItem>
                    <SimpleItem isRequired/>
                    <SimpleItem isRequired
                        dataField="EmpleadoId" 
                        editorOptions={{ disabled: true }}
                    />
                </GroupItem>
            </GroupItem>

            <GroupItem cssClass="second-group"
                caption="Información del Sistema"
                colCount={2}>

                <SimpleItem isRequired
                    dataField="Usuario" />

                <SimpleItem isRequired
                    dataField="Estado" />

                <SimpleItem
                    dataField="Correo"
                    editorType="dxTextBox">
                    <RequiredRule message="Se requiere completar este campo" />
                    <EmailRule message="El correo no es valido" />
                    <AsyncRule
                        message="El correo ya se encuentra registrado"
                        validationCallback={ console.log} />
                </SimpleItem>
                
                <SimpleItem isRequired
                    dataField="Clave"/>
            
            </GroupItem>
        </FormDialog>
    )
});

export default FormEmpleado;