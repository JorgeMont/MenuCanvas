import { useState } from "react";
import FormInput from "../FormInput/FormInput";

const CreateRestaurantLinks = () => {
  const [values, setValues] = useState({
    fb: "",
    whatsapp: "",
    ig: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fb",
      type: "text",
      placeholder: "https://www.facebook.com/...",
      errorMessage: "Favor de ingresar un enlace de Facebook",
      label: "Facebook *",

      required: true,
    },
    {
      id: 2,
      name: "whatsapp",
      type: "text",
      placeholder: "https://www.whatsapp.com/...",
      errorMessage: "Favor de ingresar un enlace de Whatsapp",
      label: "Whatsapp",
      required: true,
    },
    {
      id: 3,
      name: "ig",
      type: "text",
      placeholder: "https://www.instagram.com/...",
      label: "Instagram",
      errorMessage: "Favor de ingresar un enlace de Instagram",
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
        <h6>Agregar enlaces de redes sociales a tu perfil (* Obligatorio)</h6>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
      </form>
    </div>
  );
};

export default CreateRestaurantLinks;
