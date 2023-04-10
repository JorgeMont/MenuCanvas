import React from 'react'
import { useState } from 'react';
import { saveDish } from '../../firebase';

function MenuForm(props) {
    const initialValues = 
        {
            nombreMenu: "",
            categoriasMenu:"",
            nombrePlatillo: "",
            precioPlatillo: "",
            categoriasPlatillo: "",
            descripcionPlatillo: "",
            fotoPlatillo: "",
        }
    
    const [values, setValues]= useState(initialValues)

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        
    } 

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values)
        saveDish(values.nombrePlatillo, values.precioPlatillo, values.descripcionPlatillo, values.fotoPlatillo)
    }


  return (
    <>
      <form className='card card-body' onSubmit={handleSubmit}>

        <div className="form-group input-group">
            <label htmlFor="nombre-menu" className='container-fluid'>Nombre del Menu</label>
            <input type="text"  placeholder='Nombre del Menu' name="nombreMenu" onChange={handleInputChange}/>
            <div className='input-group-text bg-light'>
            </div>
        </div>

        <div className="form-group input-group"> 
            <label htmlFor="categorias-menu" className='container-fluid'>Categorias</label>
            <input type="text"  placeholder='Categorias' name="categoriasMenu" onChange={handleInputChange}/>
            <button>+ Agregar Categoria</button>
        </div>

        <div className="form-group input-group">
            <button>Create Menu</button>
        </div>


        <div className="form-group input-group d-flex 3f 3fr 3fr">
        <input type="text" placeholder='Nombre del Platillo' name="nombrePlatillo" onChange={handleInputChange}/>
            <input type="number" placeholder='Precio Platillo' name="precioPlatillo" onChange={handleInputChange}/>
            <select name="categoriaPlatillo" id="categoria" onChange={handleInputChange} >
                <option value="desayuno">Desayuno</option>
                <option value="comida">comida</option>
            </select>
        </div>


        <div className="form-group input-group">
            <textarea name="descripcionPlatillo" id="description" rows="3" placeholder='descripccion platillo' onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group input-group">
            <input type="url" placeholder='link foto platillo' name='fotoPlatillo'/>
        </div>

        <div className="form-group input-group">
            <button id="btn-create-dish" onClick={handleInputChange}>Crear Platilo</button>
        </div>

        <div className="form-group input-group">
            <input type="checkbox" name="deshabilitar" id="deshabilitar" />
            <label htmlFor="deshabilitar">Deshabilitar platillo</label>
        </div>

      </form>
    </>
  )
}

export default MenuForm
