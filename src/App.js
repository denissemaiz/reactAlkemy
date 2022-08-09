/* ESTE ES EL COMPONENTE QUE SE ESTÁ MOSTRANDO EN PANTALLA */

//LIBRARIES
import { Routes, Route } from 'react-router-dom';

//COMPONENTS
import Login from "./components/Login";
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';

//STYLES
import './css/bootstrap.min.css';
/* import './css/app.css'; */

function App() {
  return (
    <div className="container mt-3">
      <Header />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

