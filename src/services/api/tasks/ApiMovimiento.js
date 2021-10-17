import withAxios from '../utilities/provider';
import {axiosQuery, axiosMutator} from '../utilities/core';

const apiMovimiento = {
    obtenerMovimiento :   withAxios("get", "/movimiento"),
    agregarMovimiento :   withAxios("post", "/movimiento"),
    editarMovimiento :    withAxios("put", "/movimiento"),
    eliminarMovimiento :  withAxios("delete", "/movimiento"),
}

export default apiMovimiento;