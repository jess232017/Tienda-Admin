import React from 'react'
import { CHeader, CToggler, CHeaderBrand, CHeaderNav, CHeaderNavItem, CHeaderNavLink } from '@coreui/react'
import CIcon from '@coreui/icons-react';

import useStore from 'src/services/context/sidebarShow';

// routes config
//import routes from '../../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const {show: sidebarShow, setShow} = useStore();

  const toggleSidebar = () => {
      const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive';
      setShow(val);
  }

  const toggleSidebarMobile = () => {
      const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive';
      setShow(val);
  }

  return (
      <CHeader withSubheader>
          <CToggler
              inHeader
              className="ml-md-3 d-lg-none"
              onClick={toggleSidebarMobile}
          />
          <CToggler
              inHeader
              className="ml-3 d-md-down-none"
              onClick={toggleSidebar}
          />
          <CHeaderBrand className="mx-auto d-lg-none" to="/">
              <CIcon name="logo" height="48" alt="Logo"/>
          </CHeaderBrand>

          <CHeaderNav className="d-md-down-none mr-auto">
              <CHeaderNavItem className="px-3" >
                  <CHeaderNavLink to="/admin/dashboard">Inicio</CHeaderNavLink>
              </CHeaderNavItem>
              <CHeaderNavItem  className="px-3">
                  <CHeaderNavLink to="/admin/venta">Ventas</CHeaderNavLink>
              </CHeaderNavItem>
              <CHeaderNavItem className="px-3">
                  <CHeaderNavLink>Configuracion</CHeaderNavLink>
              </CHeaderNavItem>
          </CHeaderNav>

          <CHeaderNav className="px-3">
              <TheHeaderDropdownNotif/>
              <TheHeaderDropdownTasks/>
              <TheHeaderDropdownMssg/>
              <TheHeaderDropdown/>
          </CHeaderNav>
      </CHeader>
  )
}

export default TheHeader
