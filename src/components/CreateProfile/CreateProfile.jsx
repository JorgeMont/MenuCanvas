import React from 'react';
import {BsPersonCircle} from "react-icons/bs";

function CreateProfile() {
  return (
    <div className="form-container">
        <form action="">
            <header>
                <h2>Cuenta</h2>
                <p>Por favor llena la informacion de tu cuenta</p>
            </header>
            <div className="foto-container">
                <h6>Foto de perfil</h6>
                <div className="foto-container">
                <i><BsPersonCircle/></i>
                <br />
                <input type="file" placeholder='Subir foto'/>
            </div>            
            
            <div className="info-personal">
                <h6>
                    Informacion Personal
                </h6>
                <p>Nombre completo</p>
                <input type="text" name="nombre-completo" id="" placeholder='Nombre y Apellidos'/>
                <p>Email</p>
                <p>unemail@dominio.com</p>
                <br />
                <br />
                <p>Contraseña</p>
                <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="">
            <p>Vieja contraseña</p>
            <input type="password" name="" id="" />

            <p>Nueva contraseña</p>
            <input type="password" name="" id="" />

            <p>Confirmar contraseña</p>
            <input type="password" name="" id="" />

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
<a href="/" data-bs-toggle="modal" data-bs-target="#exampleModal">Cambiar contraseña</a>
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
