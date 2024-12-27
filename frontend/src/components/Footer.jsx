'use client'

import React from 'react';

// Social media icons as separate components for better maintainability
const TwitterIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

const FacebookIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

// Social media links data
const socialLinks = [
  { icon: <TwitterIcon />, href: "#", label: "Twitter" },
  { icon: <YoutubeIcon />, href: "#", label: "YouTube" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com/profile.php?id=100069178915958&locale=es_LA", label: "Facebook" }
];

// Contact information data
const contactInfo = [
  { text: "Valle de los chillos, Quito, Ecuador", href: "#" },
  { text: "(593) 96 349 4220", href: "tel:+59396349420" },
  { text: "(593) 98 742 7765", href: "tel:+59398742765" }
];

// Newsletter subscription form component
const NewsletterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <label htmlFor="email-input" className="sr-only">Email address</label>
      <input
        id="email-input"
        type="email"
        name="email"
        placeholder="Ingresa tu e-mail"
        className="w-full bg-gray-100 text-gray-700 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#1B8FBD] focus:border-transparent"
        required
      />
      <button
        type="submit"
        className="bg-[#E26E7C] text-white font-semibold py-3 px-6 rounded-r-lg transition-colors duration-300 hover:bg-[#c85d6a] focus:outline-none focus:ring-2 focus:ring-[#E26E7C] focus:ring-offset-2"
      >
        Subscribe
      </button>
    </form>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#e7e7e7] text-[#444444] px-4 py-8 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
          {/* Logo and social media section */}
          <div className="lg:w-[35%]">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo.jpg"
                alt="Fundación Ressurgir Logo"
                width="66"
                height="66"
                className="object-contain"
              />
              <h2 className="text-2xl md:text-3xl font-bold">FUNDACIÓN RESSURGIR</h2>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-6 p-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="transition-colors duration-300 hover:text-[#1B8FBD] focus:outline-none focus:ring-2 focus:ring-[#1B8FBD] rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact and Newsletter section */}
          <div className="lg:w-[65%] flex flex-col md:flex-row justify-end gap-8 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="font-bold uppercase text-[#1B8FBD] pb-3">Contáctanos</h3>
              <ul className="space-y-2">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#1B8FBD] rounded px-2 py-1 -mx-2"
                    >
                      {info.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="md:max-w-sm">
              <h3 className="font-bold uppercase text-[#1B8FBD] pb-3">Suscríbete</h3>
              <p className="text-[#444444] mb-4">Suscríbete a nuestro boletín.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-8" role="separator" />

        {/* Copyright */}
        <p className="text-center text-sm">
          © {currentYear} Fundación Ressurgir - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;