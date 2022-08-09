import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from 'react-router-dom';

function Login(){

    const history = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email === ''|| password === ''){
            swAlert(
                { text: "Los campos no pueden estar vacíos", icon: "error" }
            );
            return;
        }

        if(email !== '' && !regexEmail.test(email)){
            swAlert(
                { text: "El correo electrónico ingresado no es una dirección válida", icon: "error" }
            );
            return;
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swAlert(
                { text: "El email o la contraseña no coinciden con un usuario válido", icon: "error"}
            );
            return;
        }

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then ((res) =>{
                swAlert(
                    { icon: "success" }
                );
                console.log(res.data);
                const tokenRecibido = res.data.token;
                localStorage.setItem('token', tokenRecibido);
                history('/listado');
            })
    }

    let token = localStorage.getItem('token');

    return(
        <>
            {token && <Navigate replace to="/listado"/> }
            <div className='row'>
                <div className='col-6 offset-3'>
                    <h2>Formulario de login</h2>
                    <form onSubmit={submitHandler}>
                        <label className='form-label d-block'>
                            <span>Correo electrónico</span><br/>
                            <input className='form-control' type="email" name="email" />
                        </label>
                        <br/>
                        <label className='form-label d-block'>
                            <span>Contraseña</span><br/>
                            <input className='form-control' type="password" name="password" />
                        </label>
                        <br/>
                        <button className='btn btn-success' type="submit">Ingresar</button>
                    </form>
                </div>
            </div>

        </>

    );
}

export default Login;