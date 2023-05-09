import React from "react";
import CreateProfile from "../components/CreateProfile/CreateProfile";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { CreateProfileRestaurant } from "../components/CreateProfileRestaurant/CreateProfileRestaurant";

function CreateProfilePage() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="container-fluid d-flex 3fr 9fr p-3">
        <Sidebar className="bg-light" />
        <CreateProfile />
        <div style={{ width: 5000 }}></div>
        <CreateProfileRestaurant />
      </div>

      <footer className="container-fluid d-flex 3fr 3fr 3fr 3fr">
        <Footer />
      </footer>
    </>
  );
}

export default CreateProfilePage;
