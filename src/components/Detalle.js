import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function Detalle() {
    let token= sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    useEffect(()=> {
        console.log(movieID)
    }, []);

    return(
        <>
        { !token && <Navigate replace to="/"/>}
        <h2>Título</h2> 
        <div className='row'>
            <div className='col-4'>
                imagen
            </div>
            <div className='col-8'>
                <h5>Título original:</h5>
                <h5>Fecha de estreno:</h5>
                <h5>Popularidad:</h5>
                <h5>Reseña:</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet omnis, itaque dolorum velit consequuntur? Mollitia expedita sed, libero fugiat, eligendi dolor tenetur tempora, laboriosam neque rem corporis hic asperiores?</p>
                <h5>Géneros:</h5>
                <ul>
                    <li>Género 1</li>
                    <li>Género 2</li>
                    <li>Género 3</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Detalle;