import React from 'react';
import { useIsAuthenticated, useAuthHeader } from 'react-auth-kit';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loading from './views/widget/Loading';
import Expired from './pages/auth/Expired';

//Theme
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import './assets/css/dx.generic.ecommerce-scheme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './scss/style.scss';

const TheLayout = React.lazy(() => import('./layouts/containers/TheLayout'))
const Auth = React.lazy(() => import('./pages/auth/Auth'));

const App = () => {
    const isAuthenticated = useIsAuthenticated();    
    const authHeader = useAuthHeader();

    if(isAuthenticated()){
        const {exp: expiresIn} = JSON.parse(atob(authHeader().split('.')[1]));
        if (expiresIn * 1000  < Date.now()) {
            return <Expired/>
        };
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