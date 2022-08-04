import axios from 'axios';

function Login(){

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email === ''|| password === ''){
            console.log('Los campos no pueden estar vacíos');
            return;
        }

        if(email !== '' && !regexEmail.test(email)){
            console.log('El correo electrónico ingresado no es válido');
            return;
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            console.log('El email o la contraseña no coinciden con un usuario válido');
            return;
        }

        console.log('Ok. Ya estamos listos para enviar la información');

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then (res =>{
                console.log(res.data);
            })
    }

    return(
        <>
            <h2>Formulario de login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo electrónico</span><br/>
                    <input type="email" name="email" />
                </label>
                <br/>
                <label>
                    <span>Contraseña</span><br/>
                    <input type="password" name="password" />
                </label>
                <br/>
                <button type="submit">Ingresar</button>
            </form>
        </>

    );
}

export default Login;