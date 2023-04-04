import React from "react";
import './SuscriptionDetails.scss';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MCLogo from '../../Assets/logo.png';

const SuscriptionDetails = ({cargo=22, isSuscribed=true}) => {
    return (
        <>
            <Navbar />
            <main className="suscription mb-5">
                <div className="suscription__head d-flex justify-content-around my-3 align-items-end">
                    <h1>Administrar Suscripión</h1>
                    <div className="menuCanvas d-flex align-items-end mb-5">
                        <p className="mr-3">MenuCanvas</p>
                        <img src={MCLogo} alt="menu canvas logo" />
                    </div>
                </div>
                <div className="suscription__info d-flex justify-content-around my-5">
                    <p>Suscripción Mensual</p>
                    <p>${cargo} / mes</p>
                    <div class="alert alert-success" role="alert">
                        Suscripción {isSuscribed ? 'activa' : 'inactiva'}
                    </div>
                </div>
                <div className="subscription__options d-flex flex-column align-items-center">
                    <p>Puedes cancelar tu suscripción cuando quieras.</p>
                    <a href="" className="mb-1">Cancelar Suscripción</a>
                    <a href="">Términos y condiciones</a>
                </div>
            </main>
            <footer className='container-fluid d-flex 3fr 3fr 3fr 3fr'>
                <Footer />
            </footer>
        </>
    );
}

export default SuscriptionDetails;