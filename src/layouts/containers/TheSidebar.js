import React from 'react'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import Tienda from '../../assets/img/tienda.png';
import useStore from 'src/services/context/sidebarShow';

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const {show, setShow} = useStore();
  return (
    <CSidebar
      show={show}
      onShowChange={val => setShow(val)}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <>
          <img src={Tienda} alt="logo" height={35} className="c-sidebar-brand-full"/>
          <span className="c-sidebar-brand-full">Abarroteria San Jose</span>
        </>
        <img src={Tienda} alt="logo" height={30} className="c-sidebar-brand-minimized"/>
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
