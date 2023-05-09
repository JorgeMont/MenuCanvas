import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CreateRestaurantLinks from "./CreateRestaurantLinks";

const CreateRestaurant = () => {
  const [values, setValues] = useState({
    nombre_restaurante: "",
    maps: "",
    telefono: "",
    logo: "",
  });

  const inputs = [
    {
      id: 1,
      name: "nombre_restaurante",
      type: "text",
      placeholder: "nombre_restaurante",
      errorMessage:
        "EL nombre del restaurante debe contener entre 3-16 caracteres y sin caracteres especiales!",
      label: "Nombre REstaurante",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "maps",
      type: "text",
      placeholder: "maps.google",
      errorMessage: "Favor de ingresar un enlace de google maps",
      label: "Enlace google maps",
      required: true,
    },
    {
      id: 3,
      name: "telefono",
      type: "tel",
      placeholder: "Telefono",
      label: "Telefono",
      pattern: "^[0-9]*$",
      required: true,
    },
    {
      id: 4,
      name: "logo",
      type: "file",
      placeholder: "Subir Foto",
      errorMessage: "Favor de subir su logo",
      label: "Logo Restaurante",

      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Restaurante</h2>
        <h6>Por favor llena la informacion de tu restaurante</h6>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <CreateRestaurantLinks />
      </form>
    </div>
  );
};

export default CreateRestaurant;
