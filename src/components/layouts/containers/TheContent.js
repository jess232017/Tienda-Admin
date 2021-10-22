import React, { Suspense } from 'react'
import { Redirect, Route, Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../../../routes';
import RequireRole from '../../../services/auth/RequireRole'

const loading = (
  <div className="spinner-center vh-100">
      <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
      </div>
  </div>
)

const TheContent = () => {
    return (
        <main className="c-main">
            <CContainer fluid>
                <Suspense fallback={loading}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <RequireRole
                                            roles={route.roles}
                                        >
                                            <CFade>
                                                <route.component {...props} />
                                            </CFade>
                                        </RequireRole> 
                                    )} 
                                />
                            )
                        })}
                        <Redirect from="/" to="/dashboard" />
                    </Switch>
                </Suspense>
            </CContainer>
        </main>
    )
}

export default React.memo(TheContent)
