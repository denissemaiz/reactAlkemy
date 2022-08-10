import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from  'axios';

function Detalle() {
    let token= sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const [ movie, setMovie ] = useState(null);

    useEffect(()=> {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=es-ES`
        
        axios.get(endPoint)
            .then(response => {
                const movieData = response.data;
                console.log(movieData)
                setMovie(movieData);
            })
            .catch(error => {
                console.log(error)
                /* swAlert(<h2>Hubo errores.<br/> Intenta más tarde</h2>); */
            })
    }, [movieID]);

    return(
        <>
            { !token && <Navigate replace to="/"/>}
            { !movie && <p>Cargando...</p> }
            { movie &&
                <>
                    <h2>{ movie.title }</h2> 
                    <div className='row'>
                        <div className='col-4'>
                        <img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } className="img-fluid" alt="movie poster" />
                        </div>
                        <div className='col-8'>
                            <h5>Título original:</h5>
                            <p>{ movie.original_title }</p>
                            <h5>Fecha de estreno:</h5>
                            <p>{ movie.release_date }</p>
                            <h5>Popularidad:</h5>
                            <p>{ movie.popularity }</p>
                            <h5>Valoración:</h5>
                            <p>{ movie.vote_average }</p>
                            <h5>Reseña:</h5>
                            <p>{ movie.overview }</p>
                            <h5>Géneros:</h5>
                            <ul>
                                { movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>) }

                            </ul>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Detalle;