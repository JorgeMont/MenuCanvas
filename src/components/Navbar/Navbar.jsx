import React from 'react'
import {AiOutlineSetting} from "react-icons/ai";
import {BiExit} from "react-icons/bi"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="/home">
    <img src="https://picsum.photos/200"  alt="logo" />
    MenuCanvas
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/nosotros">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/planes">Planes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contacto">Contacto</a>
        </li>
      </ul>
      <span className="navbar-text">
        <a href="/profile">
            <img src="https://picsum.photos/200" alt="profile-pic" />
            <div className="btn-group dropdown">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Nombre
                </button>
                <ul className="dropdown-menu">
                    <li><a href="/">Ajustes de la cuenta <i><AiOutlineSetting/></i></a></li>
                    <li><a href="/">Cerrar session <i><BiExit/></i> </a></li>
                </ul>
            </div>
        </a>
      </span>
    </div>
  </div>
</nav>

  );
};

export default Navbar
