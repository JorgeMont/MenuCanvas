import React from 'react'
import MenuForm from '../MenuForm/MenuForm'
import MenuPreview from '../MenuPreview/MenuPreview'
import {db} from "../../firebase";


function MenuEditor() {

    const addDish = async (linkObject) =>{
        await db.collection("Dishes").doc().set(linkObject)
        console.log("new dish added")
    }

  return (
    <>
    <MenuForm addOrEdit={addDish}/>
    <MenuPreview/>
    </>
  )
}

export default MenuEditor
