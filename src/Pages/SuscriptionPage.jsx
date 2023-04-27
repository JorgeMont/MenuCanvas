import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Suscription from "../components/Suscription/Suscription";

const SuscriptionPage = () => {
  return (
    <>
      <Navbar />
      <Suscription />
      <footer className="container-fluid d-flex 3fr 3fr 3fr 3fr">
        <Footer />
      </footer>
    </>
  );
};

export default SuscriptionPage;
