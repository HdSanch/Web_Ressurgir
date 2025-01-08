import React from 'react';

const Mapa = () => {
  return (
    <div className="mb-12">
      <h2 className="contactanos-subheader">Nuestra Ubicación</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.24992316332!2d-78.53698835136721!3d-0.2944878999999949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd1333e98797%3A0x87ba619ad4359425!2sFundaci%C3%B3n%20misi%C3%B3n%20por%20tu%20vida%20Ressurgir!5e0!3m2!1ses-419!2sec!4v1728266890469!5m2!1ses-419!2sec"
        title="Mapa de la Fundación Misión por Tu Vida Ressurgir"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: '10px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Mapa;
