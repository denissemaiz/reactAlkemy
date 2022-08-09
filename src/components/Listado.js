import { useEffect, useState } from 'react';
import { /* useNavigate, */ Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function Listado(){

    let token= localStorage.getItem('token');

    const [ moviesList, setMoviesList ] = useState([]);
   
    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=es-ES&page=1'
        /* https://api.themoviedb.org/3/discover/movie?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate */
        axios.get(endPoint)    
            .then(response => {
                const apiData = response.data;
                setMoviesList(apiData.results)
            })
    }, [setMoviesList]);

    console.log(moviesList)

    return (
        <>
        { !token && <Navigate replace to="/"/>}
        
        <div className="row">
            <div className="col-4">
                <div className="card" /* style="width: 18rem;" */>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Movie title</h5>
                        <p className="card-text">Review de la movie Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae 
                        corporis porro dicta similique quisquam cupiditate, veritatis a error. Labore nobis neque voluptas sequi sit,
                        dignissimos quam deleniti aliquid commodi tempore..</p>
                        <Link to="/" className="btn btn-primary">View detail</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Listado;