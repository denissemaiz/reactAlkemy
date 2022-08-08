import { Link } from 'react-router-dom';

function Header(){
    return(
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/listado">Listado</Link>
                    </li>
{/*                     <li>
                        <Link to="">Contacto</Link>
                    </li> */}
                </ul>
            </nav>
        </footer>
    )
}

export default Header;