import React from "react";
import CreateProfile from "../components/CreateProfile/CreateProfile";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { CreateProfileRestaurant } from "../components/CreateProfileRestaurant/CreateProfileRestaurant";
import CreateRestaurant from "../components/CreateProfileRestaurant/CreateRestaurant";
import CreateProfile2 from "../components/CreateProfile/2CreateProfile";

function CreateProfileTest() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="container-fluid d-flex 3fr 9fr p-3">
        <Sidebar className="bg-light" />
        <CreateProfile2 />
      </div>

      <footer className="container-fluid d-flex 3fr 3fr 3fr 3fr">
        <Footer />
      </footer>
    </>
  );
}

export default CreateProfileTest;
