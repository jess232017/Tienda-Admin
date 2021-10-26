import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import useHeaderJwt from './services/hooks/useHeaderJwt';
import Loading from './views/widget/Loading';
import Expired from './views/auth/Expired';

//Theme
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import './assets/css/dx.generic.ecommerce-scheme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './scss/style.scss';

const TheLayout = React.lazy(() => import('./components/layouts/containers/TheLayout'))
const Auth = React.lazy(() => import('./views/auth/Auth'));

const App = () => {
    const {isAuthenticated, exp: expiresIn} = useHeaderJwt();

    if(isAuthenticated && expiresIn * 1000  < Date.now()){
        return<Expired/>
    }
          
    return (
        <HashRouter>
            <React.Suspense fallback={<Loading className="vh-100"/>}>
                <Switch>
                    <Route exact path="/login" name="Ingresar">
                      {isAuthenticated ? <TheLayout /> : <Auth/> }
                    </Route>
                    
                    <Route exact path="/sign-up" name="Registrase">
                      {isAuthenticated ? <TheLayout /> : <Auth/> }
                    </Route>
                    
                    <Route path="/" name="Inicio">
                      {isAuthenticated ? <TheLayout /> : <Redirect to="/login" /> }
                    </Route>
                </Switch>
            </React.Suspense>
        </HashRouter>
    );
}

export default App;