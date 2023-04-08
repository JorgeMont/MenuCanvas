import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from "../components/Footer/Footer";
import CreateMenuDishes from '../components/CreateMenuDishes/CreateMenuDishes';




const CreateMenuDishesPage = ()=> {
  return <>
    <nav>
      <Navbar/>  
    </nav>
    <div className="container-fluid d-flex 3fr 9fr p-3">
      <Sidebar className="bg-light"/>
      <CreateMenuDishes/>  
    </div>

     
    <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
      <Footer/>
    </footer>
  </>
}

export default CreateMenuDishesPage
