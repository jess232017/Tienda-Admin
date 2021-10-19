import React from 'react';

const Ventas = React.lazy(() => import('./pages/ventas/Venta'));
const TomarVenta = React.lazy(() => import('./pages/ventas/nueva/AddVenta'));
const DetalleVenta = React.lazy(() => import('./pages/ventas/detalles/Detalle'));
const Movimiento = React.lazy(() => import('./pages/movimientos/Movimiento'));
const Inventario = React.lazy(() => import('./pages/inventario/Inventario'));
const Proveedor = React.lazy(() => import('./pages/proveedor/Proveedor'));
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const Empleado = React.lazy(() => import('./pages/empleados/Empleado'));
const Producto = React.lazy(() => import('./pages/productos/Producto'));
const Categoria = React.lazy(() => import('./pages/categorias/Categoria'));
const Cliente = React.lazy(() => import('./pages/clientes/Cliente'));
const Caja = React.lazy(() => import('./pages/cajas/Caja'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/venta', exact: true, name: 'Ventas', component: Ventas },
  { path: '/admin/venta/nueva', name: 'Tomar Venta', component: TomarVenta },
  { path: '/admin/venta/detalle', name: 'Detalle Venta', component: DetalleVenta },
  { path: '/admin/producto', name: 'Producto', component: Producto },
  { path: '/admin/categoria', name: 'Categoria', component: Categoria },
  { path: '/admin/movimiento', name: 'Movimiento', component: Movimiento },
  { path: '/admin/inventario', name: 'Inventario', component: Inventario },
  { path: '/admin/producto', name: 'Producto', component: Producto },
  { path: '/admin/caja', name: 'Caja', component: Caja },
  { path: '/admin/cliente', name: 'Cliente', component: Cliente },
  { path: '/admin/proveedor', name: 'Proveedor', component: Proveedor },
  { path: '/admin/empleado', name: 'Empleado', component: Empleado },
];

export default routes;
