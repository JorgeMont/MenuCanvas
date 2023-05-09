import React from "react";

export const CreateProfileRestaurant = () => {
  return (
    <form>
      <div className="info-restaurante">
        <h2>Restaurante</h2>
        <p>Por favor llene la informacion de tu restaurante</p>

        <h6>Nombre del restaurante</h6>
        <input type="text" placeholder="Nombre" />

        <h6>Enlace google Maps</h6>
        <input type="url" name="" id="" placeholder="www.google.com/maps" />

        <h6>Telefono</h6>
        <input
          type="number"
          name=""
          id=""
          placeholder="numero del Restaurante"
        />

        <h6>Logo restaurante</h6>
        <input type="file" name="" id="" placeholder="Sube tu Imagen" />

        <h4>Agregar enlaces de redes sociales a tu perfil (*Obligatiorio)</h4>

        <h6>Facebook</h6>
        <input type="url" name="" id="" placeholder="www.facebook.com/perfil" />

        <h6>Whatsapp</h6>
        <input
          type="url"
          name=""
          id=""
          placeholder="www.Whatsapp.web.com/perfil"
        />

        <h6>Instagram</h6>
        <input
          type="url"
          name=""
          id=""
          placeholder="www.Instagram.com/perfil"
        />
      </div>
    </form>
  );
};
