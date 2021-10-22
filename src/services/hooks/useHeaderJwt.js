import {useAuthHeader} from 'react-auth-kit'

const useHeaderJwt = () => {
    const authHeader = useAuthHeader();
    const decodedJwtJsonData = window.atob(authHeader().split('.')[1]);
    return JSON.parse(decodedJwtJsonData);
}
 
export default useHeaderJwt;