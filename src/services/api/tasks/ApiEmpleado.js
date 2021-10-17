import withAxios from '../utilities/provider';
import {axiosQuery, axiosMutator} from '../utilities/core';

const apiEmpleado = {
    obtenerEmpleado :   withAxios("get", "/empleado"),
    agregarEmpleado :   withAxios("post", "/empleado"),
    editarEmpleado :    withAxios("put", "/empleado"),
    eliminarEmpleado :  withAxios("delete", "/empleado"),
}

export default apiEmpleado;