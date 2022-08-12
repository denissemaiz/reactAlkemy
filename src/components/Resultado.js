import { useEffect, useState } from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { Link } from 'react-router-dom';

function Resultado(){

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    console.log(keyword)

    const [ moviesResult, setMoviesResult ] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=es-ES&query=${keyword}`;
        axios.get(endPoint)    
            .then(response => {
                const resultArray = response.data.results;
                if(resultArray.length === 0 ){
                    swAlert({ text: "No se encontraron resultados para tu búsqueda" });
                }
                setMoviesResult(resultArray);
            })
            .catch(error => {
                swAlert(<h2>Hubo errores.<br/> Intenta más tarde</h2>);
            })
    }, [keyword])

    return(
    <>
        <h2 className='pt-4 px-5'>Buscaste: <em>{keyword}</em></h2> 
        { moviesResult.length === 0 && <h3 className='pt-4 px-5'>No hay resultados</h3>}      
        <div className="row px-5">
            {
                moviesResult.map((oneMovie, idx) => {
                    return(
                    <div className="col-3" key={idx}>
                        <div className="card my-4">
                        <img src={ `https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}` } className="card-img-top" alt="poster" />
                            <div className="card-body">
                            <h5 className="card-title">{ oneMovie.title.substring(0, 30) }</h5>
                            <p className="card-text">{ oneMovie.overview.substring(0, 100) }...</p>
                            <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                            </div>
                        </div>
                    </div>
                    )
                }) 
            }
        </div>
    </>
    )
}

export default Resultado;