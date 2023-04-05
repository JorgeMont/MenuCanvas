import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ButtonGratis from '../components/ElijePlan/buttonPruebaGratis';
import CardsPrice from '../components/ElijePlan/ElijePlan';
import Footer from '../components/Footer/Footer';

function SelectYourPlan() {
    return <>
      <nav>
        <Navbar/>  
      </nav>
      <ButtonGratis/>
      <CardsPrice/>
  
       
      <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
        <Footer/>
      </footer>
    </>
  }
  
  export default SelectYourPlan