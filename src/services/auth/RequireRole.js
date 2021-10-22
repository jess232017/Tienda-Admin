import React from 'react';

import {ROLES} from './permission-maps';
import useHeaderJwt from '../hooks/useHeaderJwt';
import Forbidden from '../../views/error/Forbidden';

const RequireRole = ({children, roles= []}) => {
    const {role: currentRole} = useHeaderJwt();

    const permissionGranted = roles.some( role => role === currentRole)

    if(!permissionGranted && currentRole === ROLES) return <Forbidden/>
    
    return <>{children}</>;
}

export default RequireRole;