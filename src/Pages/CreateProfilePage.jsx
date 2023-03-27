import React from 'react';
import CreateProfile from '../components/CreateProfile/CreateProfile';
import Navbar from "../components/Navbar/Navbar";
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from "../components/Footer/Footer";



function CreateProfilePage() {
  return <>
    <nav>
      <Navbar/>  
    </nav>
    <div className="container-fluid d-flex 3fr 9fr">
      <Sidebar/>
      <CreateProfile />  
    </div>

     
    <footer>
      <Footer/>
    </footer>
  </>
}

export default CreateProfilePage
