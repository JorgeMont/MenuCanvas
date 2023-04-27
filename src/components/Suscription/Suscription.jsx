import React from "react";
import './Suscription.scss';
const Suscription = () => {
    return(
        <main>
            <div className="title">
                <h1>Administrar suscripción</h1>
            </div>
            <div className="info">
                <h2>Suscripción mensual</h2>
                <h2 className="monto">$150.00 / mes</h2>
                <h2 className="edoSuscripcion">Suscripción Activa</h2>
            </div>
            <div className="options">
                <p>Puedes cancelar tu suscripción cuando quieras</p>
                <a href="/">Cancelar suscripción</a>
                <a href="/">Terminos y condiciones</a>
            </div>
        </main>
    );
}

export default Suscription;