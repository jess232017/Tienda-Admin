import React, { useState, useEffect } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import { useQuery, useQueryClient } from 'react-query';
import withAxios from 'src/services/api/utilities/provider';
import Pagination from '@atlaskit/pagination';

const availableSize = [5, 8, 15, 30];

function usePaginator(method, url, queryKey) {
    const authHeader = useAuthHeader()();
    const queryClient = useQueryClient();
    const [size, setSize] = useState(15);
    const [page, setPage] = useState(2);

    const fetch = () => async() =>{
        const { data } =  await withAxios(method, `${url}/paginar?PageNumber=${page}&PageSize=${size}`, authHeader)();
        return data
    }
  
    const {data, isLoading, isSuccess, isError} = useQuery([queryKey, {page, size}], fetch(), {
        keepPreviousData: true,
        staleTime: 50000
    });
  
    // Preobtener la pagina siguiente!
    useEffect(() => {
      if (data?.totalPages < page) {
        queryClient.prefetchQuery([queryKey, {page, size}], fetch())
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, page, size, queryClient])

    useEffect(() =>{
        setPage(1);
    }, [size])

    const Paginator = () => (  
        <div class="dx-widget dx-datagrid-pager dx-pager">
            {/*Tamaños de pagina*/}
            <div class="dx-page-sizes">
                {availableSize.map( valor =>
                    <button class={`css-${valor===size? "18ybw7p": "16u4yzb"}-ButtonBase`} page={valor} key={`pageSize_${valor}`}  type="button" tabindex="0"
                        onClick={ () => setSize(valor)}
                    >
                        <span class="css-7no60z-ButtonBase">{valor}</span>
                    </button>
                )}
            </div>

            {/*Indice de pagina*/}
            <div class="dx-pages">
                <div class="dx-page-indexes">
                    <Pagination 
                        defaultSelectedIndex = {page-1}
                        pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} 
                        onChange= {(_, page, _x) => setPage(page)}
                    />
                </div>
            </div>
        
            
        </div>
    );

    return {
        Paginator, data, isError, isLoading, isSuccess
    }
}

export default usePaginator;