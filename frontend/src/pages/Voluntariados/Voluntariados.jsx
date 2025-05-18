import React, { useState, useEffect } from 'react';
import VolunteerCarousel from '@components/VolunteerCarousel';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "@styles/voluntariado.css";

const Voluntariados = () => {
  const navigate = useNavigate();
  const [monto, setMonto] = useState(25);
    useEffect(() => {
    AOS.init({ 
      duration: 900, 
      once: true,
      easing: 'ease-in-out',
      offset: 100
    });
  }, []);

  return (
    <div>
      {/* SECCIÓN VOLUNTARIADOS */}
      <div className="voluntariados-header">
        <div 
          className="voluntariados-texto"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <h1 data-aos="fade-up" data-aos-delay="200">
            ¡Haz la Diferencia con Nosotros!
          </h1>
          <p data-aos="fade-up" data-aos-delay="400">
            Únete a nuestra misión para transformar vidas. Con tu compromiso, ayudas a quienes más lo necesitan mientras desarrollas habilidades y creces como persona. Si no puedes dedicar tiempo, apoya con donaciones económicas que financian programas esenciales de educación, salud y alimentación. Juntos, voluntarios y donantes construimos un futuro mejor.
          </p>
        </div>
        <div 
          className="voluntariados-imagen"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <img src="/images/varias/voluntariado.png" alt="Voluntariado" />
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
        <VolunteerCarousel />
      </div>

      <div 
        className="voluntariados-info"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <h2 data-aos="slide-down" data-aos-delay="200">
          ¿Cómo ser voluntario?
        </h2>
        <p data-aos="fade-in" data-aos-delay="400">
          Si estás interesado en ser parte de esta noble causa y unirte a nuestra comunidad de voluntarios,
          contáctanos para más información.
        </p>
        <button 
          onClick={() => navigate('/contactanos')}
          data-aos="bounce-in"
          data-aos-delay="600"
        >
          Contactarnos
        </button>
      </div>

      {/* SECCIÓN DONACIONES */}
      <div className="donaciones-container">
        <header 
          className="donaciones-header"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1 data-aos="zoom-in" data-aos-delay="200">
            Haz la Diferencia
          </h1>
          <p data-aos="fade-up" data-aos-delay="400">
            Con tu donación, podemos impactar más vidas y construir un futuro mejor. Cada contribución cuenta.
          </p>
        </header>

        <div className="contenedor-donacion-impacto">
          {/* Formulario Donación */}
          <PayPalScriptProvider options={{ "client-id": "AVqTOrintl2LJeNnq8P9vszJXgaDIM1G0dHCfDbmTMNxvUg4HLU-WdThXBtj6W4AbDuWxF_jCOkdismq" }}>
            <section 
              id="donar" 
              className="formulario-donacion"
              data-aos="slide-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h2 data-aos="fade-in" data-aos-delay="300">
                Elige tu Monto
              </h2>

              <div 
                className="montos-botones"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                {[10, 25, 50, 100].map((cantidad, index) => (
                  <button
                    key={cantidad}
                    className={`monto-boton ${monto === cantidad ? "activo" : ""}`}
                    onClick={() => setMonto(cantidad)}
                    data-aos="flip-left"
                    data-aos-delay={600 + (index * 100)}
                  >
                    ${cantidad}
                  </button>
                ))}
              </div>

              <div 
                className="otra-cantidad"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <input
                  type="number"
                  placeholder="Otra cantidad"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                />
              </div>

              <div 
                className="paypal-boton"
                data-aos="zoom-in"
                data-aos-delay="1200"
              >
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: monto.toString(),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      alert(`Gracias, ${details.payer.name.given_name}, por donar $${monto}!`);
                    });
                  }}
                />
              </div>

              <p 
                className="nota-seguridad"
                data-aos="fade-in"
                data-aos-delay="1400"
              >
                Pagos seguros con PayPal
              </p>
            </section>
          </PayPalScriptProvider>

          {/* Impacto Donaciones adaptado */}
          <section 
            className="impacto-donaciones"
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h2 data-aos="fade-down" data-aos-delay="400">
              Tu Donación en Acción
            </h2>
            <p data-aos="fade-up" data-aos-delay="500">
              Somos una institución comprometida con brindar servicios integrales de salud: psicología, psiquiatría, medicina general, nutrición, enfermería y atención pre hospitalaria, tanto dentro como fuera de nuestra fundación.
            </p>
            <p data-aos="fade-up" data-aos-delay="600">
              Apoyamos a niños, jóvenes, adultos y adultos mayores en situación de vulnerabilidad, luchando contra la violencia de género y promoviendo la equidad.
            </p>
            <p data-aos="fade-up" data-aos-delay="700">
              Nuestra misión es ofrecer acompañamiento personalizado, recursos y programas que fortalezcan el bienestar físico, emocional y social de las personas, promoviendo su autonomía y dignidad.
            </p>
            <p data-aos="fade-up" data-aos-delay="800">
              Desde 2021, nuestra fundación ha crecido gracias al compromiso de fundadores y voluntarios que brindan charlas, terapias y campañas médicas a nivel nacional. Nacimos para cambiar la realidad de quienes enfrentan adicciones y exclusión social, con amor y disciplina.
            </p>
          </section>
        </div>

        {/* Información de Donaciones */}
        <section 
          className="info-donaciones mt-8 p-6 bg-gray-100 rounded-lg"
          data-aos="flip-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <h2 data-aos="slide-down" data-aos-delay="300">
            Donaciones Directas
          </h2>
          <p data-aos="fade-in" data-aos-delay="400">
            También puedes apoyar con transferencias a nuestra cuenta bancaria:
          </p>
          <ul 
            className="list-disc list-inside mt-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <li data-aos="slide-right" data-aos-delay="600">
              <strong>Cuenta de Cooperativa Luz del Valle</strong>
            </li>
            <li data-aos="slide-right" data-aos-delay="700">
              Cuenta de ahorros: <code>406100031799</code>
            </li>
            <li data-aos="slide-right" data-aos-delay="800">
              RUC: <code>1793210266001</code>
            </li>
            <li data-aos="slide-right" data-aos-delay="900">
              Nombre: <code>Fundación misión por tu vida ressurgir</code>
            </li>
            <li data-aos="slide-right" data-aos-delay="1000">
              Correo: <a href="mailto:fund.misionportuvidaressurgir@gmail.com">fund.misionportuvidaressurgir@gmail.com</a>
            </li>
          </ul>
        </section>
      </div>

    </div>
  );
};

export default Voluntariados;