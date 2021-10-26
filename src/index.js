import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AuthProvider } from 'react-auth-kit'; 
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query';
import NiceModal from '@ebay/nice-modal-react';
import './scss/style.scss';

const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider authType = {'cookie'}
            authName={'_auth'}
            cookieDomain= {window.location.hostname}
            cookieSecure= {window.location.protocol === "https:"}
        >

            <QueryClientProvider client={queryClient}>
                <NiceModal.Provider>
                    <App/>
                </NiceModal.Provider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
