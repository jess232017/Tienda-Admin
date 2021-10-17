import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Panel de datos',
    to: '/dashboard',
    icon: <i className="pi pi-microsoft c-sidebar-nav-icon"></i>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ventas',
    to: '/admin/venta',
    icon: <i className="pi pi-shopping-cart c-sidebar-nav-icon"></i>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Inventarios',
    to: '/admin/inventario',
    icon: <i className="pi pi-credit-card c-sidebar-nav-icon"></i>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Bitacoras',
    to: '/admin/movimiento',
    icon: <i className="pi pi-book c-sidebar-nav-icon"></i>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Productos',
    to: '/admin/producto',
    icon: <i className="pi pi-tag c-sidebar-nav-icon"></i>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cajas',
    to: '/admin/caja',
    icon: <i className="pi pi-desktop c-sidebar-nav-icon"></i>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Contactos',
    route: '/pages',
    icon: <i className="pi pi-user c-sidebar-nav-icon"></i>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Clientes',
        to: '/admin/cliente',
        icon: <i className="pi pi-user c-sidebar-nav-icon"></i>,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Empleados',
        to: '/admin/empleado',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Proveedores',
        to: '/admin/proveedor',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ayuda',
    to: '/admin/ayuda',
    icon: <CIcon content={freeSet.cilInfo} customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Configuracion',
    to: '/admin/config',
    icon: <CIcon content={freeSet.cilSettings} customClasses="c-sidebar-nav-icon"/>,
  },
]

export default _nav
