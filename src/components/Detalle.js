import { Navigate } from 'react-router-dom';

function Detalle() {
    let token= sessionStorage.getItem('token');
    return(
        <>
        { !token && <Navigate replace to="/"/>}
        <h2>Soy el componente Detalle</h2> 
        </>
    )
}

export default Detalle;