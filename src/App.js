import React from 'react';
import { useIsAuthenticated, useAuthHeader } from 'react-auth-kit';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loading from './views/widget/Loading';
import Expired from './views/auth/Expired';

//Theme
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import './assets/css/dx.generic.ecommerce-scheme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './scss/style.scss';
import useHeaderJwt from './services/hooks/useHeaderJwt';

const TheLayout = React.lazy(() => import('./components/layouts/containers/TheLayout'))
const Auth = React.lazy(() => import('./views/auth/Auth'));

const App = () => {
    const isAuthenticated = useIsAuthenticated();  
    const {exp: expiresIn} = useHeaderJwt();

    if(isAuthenticated()){
        if (expiresIn * 1000  < Date.now()) (<Expired/>)
    }
          
    return (
        <HashRouter>
            <React.Suspense fallback={<Loading className="vh-100"/>}>
                <Switch>
                    <Route exact path="/login" name="Ingresar">
                      {isAuthenticated() ? <TheLayout /> : <Auth/> }
                    </Route>
                    
                    <Route exact path="/sign-up" name="Registrase">
                      {isAuthenticated() ? <TheLayout /> : <Auth/> }
                    </Route>
                    
                    <Route path="/" name="Inicio">
                      {isAuthenticated() ? <TheLayout /> : <Redirect to="/login" /> }
                    </Route>
                </Switch>
            </React.Suspense>
        </HashRouter>
    );
}

export default App;