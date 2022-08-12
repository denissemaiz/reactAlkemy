import swAlert from '@sweetalert/with-react';
import { useNavigate/* , Navigate */ } from 'react-router-dom';

function Buscador(){

    const history = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        
        if(keyword.length === 0){
            swAlert({ text: "Escribe una palabra clave", icon: "error" })
        } else if(keyword.length < 2){
            swAlert({ text: "Escribe más de un caracter", icon: "error" })
        } else {
            e.currentTarget.keyword.value = '';
            history(`/resultado?keyword=${keyword}`);
        }
    }

    return(
        <form className="d-flex align-items-center" onSubmit={submitHandler}>
            <label className='form-label mb-0 mx-2'>
                <input className='form-control' type="text" name="keyword" placeholder="Escribe aquí..."/>
            </label>
            <button className='btn btn-success' type='submit'>Buscar</button>
        </form>
    )
}

export default Buscador;