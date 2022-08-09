import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Listado(){

    const history = useNavigate();
    
    useEffect(() => {
        const token= localStorage.getItem('token');
        if(token === null){
            history('/');
        }
    }, []);

    return (
        <div className="row">
            <div className="col-4" style={{border: '1px solid red'}}>
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
{/*             <div className="col-4" style={{border: '1px solid red'}}>Peli 2</div>
            <div className="col-4" style={{border: '1px solid red'}}>Peli 3</div>
            <div className="col-4" style={{border: '1px solid red'}}>Peli 4</div>
            <div className="col-4" style={{border: '1px solid red'}}>Peli 5</div>
            <div className="col-4" style={{border: '1px solid red'}}>Peli 6</div>
            <div className="col-4" style={{border: '1px solid red'}}>Peli 7</div>
            <div className="col-4" style={{border: '1px solid red'}}>Peli 8</div>
            <div className="col-4" style={{border: '1px solid red'}}>Peli 9</div> */}

        </div>
    )
}

export default Listado;