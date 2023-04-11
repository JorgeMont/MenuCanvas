import React from 'react'

//imports from firebase 



//rfce that will be added to MenuEditor
const MenuPreview = () =>{
  //function that triggers the Show Menu Preview Button
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
    const btnsDelete = dishContainer.querySelectorAll(".btn-delete")

    //function that adds the deleteDish() to every btn
    btnsDelete.forEach(btn =>{
      btn.addEventListener("click", (e)=>{
        deleteDish(e.target.dataset.id)
      })
    })
    }) 
  }
  //renders the app
  return (
    <div>
      
    </div>
  )
}

export default MenuPreview
