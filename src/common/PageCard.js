import React from 'react';

import { Skeleton } from 'primereact/skeleton';

const PageCard = ({icon, titulo, subTitulo, isLoading, isError, children}) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">
                    <i className={`pi ${ icon ?? "pi-th-large"} p-mr-2`}></i>
                    {titulo}
                </div>
                <div className="mb-0 card-subtitle">{(isLoading ? "Cargando..." : subTitulo)}</div>
            </div>

            <div className="card-body">
                {isLoading ?
                    <>
                        <div className="p-d-flex p-jc-between p-mt-3 p-mb-3">
                            <div className="p-d-flex">
                                <Skeleton width="7rem" height="2rem" className="mr-2"></Skeleton>
                                <Skeleton width="7rem" height="2rem" className="mr-2"></Skeleton>
                                <Skeleton width="7rem" height="2rem" className="mr-2"></Skeleton>
                            </div>
                            <div className="p-d-flex">
                                <Skeleton width="2.4rem" height="2rem" className="mr-3"></Skeleton>
                                <Skeleton width="10rem" height="2rem"></Skeleton>
                            </div>
                        </div>
                        <Skeleton width="100%" height="18rem"></Skeleton>
                        <div className="p-d-flex p-jc-between p-mt-3">
                            <Skeleton width="9rem" height="2rem"></Skeleton>
                            <Skeleton width="25rem" height="2rem"></Skeleton>
                        </div>
                    </>
                :isError ?
                    <p>Error al cargar</p>
                :
                    <>{children}</>
                }
                
            </div>
        </div>
    );
}
 
export default PageCard;