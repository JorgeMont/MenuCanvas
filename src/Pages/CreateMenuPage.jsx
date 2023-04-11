import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from "../components/Footer/Footer";
import MenuForm from '../components/MenuForm/MenuForm';






const CreateMenuPage = ()=> {


  return <>
    <nav>
      <Navbar/>  
    </nav>
    <div className="container-fluid d-flex 3fr 6fr p-6">
      <Sidebar className="bg-light"/>
      <div className="container menu-editor d-flex p-4">
      <MenuForm/>  
      </div>
      
    </div>

     
    <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
      <Footer/>
    </footer>
  </>
}

export default CreateMenuPage
