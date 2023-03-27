import React from 'react';
import {BsPersonCircle} from "react-icons/bs";

function CreateProfile() {
  return (
    <div className="container">
        <form action="">
            <header>
                <h2>Cuenta</h2>
                <p>Por favor llena la informacion de tu cuenta</p>
            </header>
            <div className="foto-container">
                <h3>Foto de perfil</h3>
                <div className="foto-container">
                <i><BsPersonCircle/></i>
                <br />
                <input type="file" placeholder='Subir foto'/>
            </div>            
            
            <div className="info-personal">
                <h5>
                    Informacion Personal
                </h5>
                <p>Nombre completo</p>
                <input type="text" name="nombre-completo" id="" placeholder='Nombre y Apellidos'/>
                <p>Email</p>
                <input type="email" placeholder='correo@dominio.com' />
                <p>Contraseña</p>
                <button>Cambiar Contraseña</button>
            </div>

            <div className="info-restaurante">
                <h2>Restaurante</h2>
                <p>Por favor llene la informacion de tu restaurante</p>
                
                <h6>Nombre del restaurante</h6>
                <input type="text" placeholder='Nombre' />
                
                <h6>Enlace google Maps</h6>
                <input type="url" name="" id="" placeholder='www.google.com/maps'/>
                
                <h6>Telefono</h6>
                <input type="number" name="" id="" placeholder='numero del Restaurante' />

                <h6>Logo restaurante</h6>
                <input type="file" name="" id="" placeholder='Sube tu Imagen' />

                <h4>Agregar enlaces de redes sociales a tu perfil (*Obligatiorio)</h4>
                
                <h6>Facebook</h6>
                <input type="url" name="" id="" placeholder='www.facebook.com/perfil'/>

                <h6>Whatsapp</h6>
                <input type="url" name="" id="" placeholder='www.Whatsapp.web.com/perfil'/>

                <h6>Instagram</h6>
                <input type="url" name="" id="" placeholder='www.Instagram.com/perfil'/> 
            </div>
            </div>
        </form>
    </div>
  )
}

export default CreateProfile
