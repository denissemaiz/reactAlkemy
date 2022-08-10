/* import '../css/footer.css'; */

function Footer(){
    return(
        <nav className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <p className="mb-3 mb-md-0 text-muted"> © 2022 Copyright Alkemy Challenge </p>
            </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="http://instagram.com" className="text-muted" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li className="ms-3">
                        <a href="http://twitter.com" className="text-muted">Twitter</a>
                    </li>
                    <li className="ms-3">
                        <a href="http://facebook.com" className="text-muted">Facebook</a>
                    </li>
                </ul>
          
        </footer> 
        </nav> 
    )
}

export default Footer;