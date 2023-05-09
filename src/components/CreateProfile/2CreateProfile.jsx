import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import { BsPersonCircle } from "react-icons/bs";
import CreateRestaurant from "../CreateProfileRestaurant/CreateRestaurant";

const CreateProfile2 = () => {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "nombre",
      type: "text",
      placeholder: "nombre",
      errorMessage:
        "Favor de ingresar su nombre completo; debe contener entre 3-30 caracteres y sin caracteres especiales!",
      label: "Nombre Completo",
      pattern: "^[A-Za-z0-9]{3,30}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "correo@correo.com",
      errorMessage: "Favor de ingresar un correo valido",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "La contraseña debe tener entre 8 y 20 caracteres e incluir al menos 1 letra, 1 número y 1 carácter especial!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
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
        <header>
          <h2>Cuenta</h2>
          <p>Por favor llena la informacion de tu cuenta</p>
        </header>
        <div className="foto-container">
          <h6>Foto de perfil</h6>
          <div className="foto-container">
            <i>
              <BsPersonCircle />
            </i>
            <br />
            <input type="file" placeholder="Subir foto" />
          </div>
        </div>

        <h6>Informacion Personal</h6>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <hr></hr>
        <CreateRestaurant />
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default CreateProfile2;
