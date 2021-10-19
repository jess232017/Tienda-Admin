import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import { confirmDialog } from 'primereact/confirmdialog'; // To use confirmDialog method

import {useSignOut} from 'react-auth-kit';

const TheHeaderDropdown = () => {
  const signOut = useSignOut()
  const confirmLogout = () => {
    confirmDialog({
      message: '¿Esta seguro que desea cerrar sesión?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Seguro',
      accept: () => {signOut()}
    });
  }


  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Cuenta</strong>
        </CDropdownItem>
        <CDropdownItem>
          <i className="pi pi-bell mfe-2"></i>
          Alertas
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <i className="pi pi-envelope mfe-2"></i>
          Mensajes
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <i className="pi pi-sliders-h mfe-2"></i>
          Tareas
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <i className="pi pi-comments mfe-2"></i>
          Comentarios
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Configuracion</strong>
        </CDropdownItem>
        <CDropdownItem>
          <i className="pi pi-user mfe-2"></i>
          Perfil
        </CDropdownItem>
        <CDropdownItem>
          <i className="pi pi-globe mfe-2"></i>
          Configuracion
        </CDropdownItem>
        <CDropdownItem>
          <i className="pi pi-wallet mfe-2"></i>
          Pagos
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <i className="pi pi-inbox mfe-2"></i>
          Proyectos
          <CBadge color="primary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick ={confirmLogout}>
          <i className="pi pi-sign-out mfe-2"></i>
          Cerrar Sesion
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
