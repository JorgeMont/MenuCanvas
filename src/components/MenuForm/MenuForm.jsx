import React from 'react'
import { useState } from 'react';
import { saveDish, getDish, collection, db, onSnapshot, deleteDish, editDish } from '../../firebase';
let editStatus = false;




function MenuForm(props) {
    const menuFormId = document.getElementById("menu-form")

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
        
        if(editStatus){
            console.log("editando")
        }else{
            saveDish(values.nombrePlatillo, values.precioPlatillo, values.descripcionPlatillo, values.fotoPlatillo)
        }
        menuFormId.reset()
    }

    const getDishTrigger = async() =>{
        await getDish()
        onSnapshot(collection(db, "dishes"),(querySnapshot)=>{
          let html = "";  
        
          const dishContainer = document.getElementById("dish-container")
           
          querySnapshot.forEach(doc=>{
          const dish = doc.data()
    
    
          //HTML structure once we create our Dish
          html += `
            <div>
              <img src="${dish.fotoPlatillo}" alt="foto-platillo"></img>
              <h3>${dish.nombrePlatillo}</h3>
              <small>${dish.precioPlatillo}</small>
              <p>${dish.descripcionPlatillo}</p>
              <button class="btn-delete"  data-id="${doc.id}">Delete</button>
              <button class="btn-edit" data-id="${doc.id}">Edit</button>
            </div>
          `
        })
    
    
        dishContainer.innerHTML= html;

        //function that adds the deleteDish() to every btn
        const btnsDelete = dishContainer.querySelectorAll(".btn-delete")
        btnsDelete.forEach(btn =>{
          btn.addEventListener("click", (e)=>{
            deleteDish(e.target.dataset.id)
          })
        })

        
        const btnsEdit = dishContainer.querySelectorAll(".btn-edit")
        btnsEdit.forEach(btn=>{
            btn.addEventListener("click", async(e)=>{
                const doc = await editDish(e.target.dataset.id)
                const dish = doc.data()
                menuFormId["nombre-platillo"].value = dish.nombrePlatillo;
                menuFormId["precio-platillo"].value = dish.precioPlatillo;
                menuFormId["descripcion-platillo"].value = dish.descripcionPlatillo;
                menuFormId["foto-platillo"].value = dish.fotoPlatillo;
                
                editStatus = true;
            })
        })

        }) 
      }


  return (
    <>
      <div className="container">
        <form className='card' onSubmit={handleSubmit} id="menu-form" >

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
<input type="text" placeholder='Nombre del Platillo' id="nombre-platillo"name="nombrePlatillo" onChange={handleInputChange}/>
    <input type="number" placeholder='Precio Platillo' id="precio-platillo" name="precioPlatillo" onChange={handleInputChange}/>
    <select name="categoriaPlatillo" id="categoria" onChange={handleInputChange} >
        <option value="desayuno" onChange={handleInputChange}>Desayuno</option>
        <option value="comida" onChange={handleInputChange}>comida</option>
    </select>
</div>


<div className="form-group input-group">
    <textarea name="descripcionPlatillo" id="descripcion-platillo" rows="3" placeholder='descripccion platillo' onChange={handleInputChange}></textarea>
</div>

<div className="form-group input-group">
<input type="text" name="fotoPlatillo" id="foto-platillo" placeholder='url de la foto' onChange={handleInputChange}/>

</div>

<div className="form-group input-group">
    <button id="btn-create-dish" onClick={handleInputChange}>Crear Platilo</button>
</div>

<div className="form-group input-group">
    <input type="checkbox" name="deshabilitar" id="deshabilitar" />
    <label htmlFor="deshabilitar" >Deshabilitar platillo</label>
</div>

        </form>
        <div>
            <button id="btn-display-menu" onClick={getDishTrigger}>Show Preview</button>
            </div>
            <div className='container' id="dish-container">
            </div>
      </div>
      
      
    </>
  )
}

export default MenuForm
