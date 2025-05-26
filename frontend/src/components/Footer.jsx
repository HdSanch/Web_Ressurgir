import React from 'react'

// Icons as React components
const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const socialLinks = [
  {
    icon: <TwitterIcon />,
    href: '#',
    label: 'Twitter',
    hoverColor: 'hover:bg-blue-500',
  },
  {
    icon: <YoutubeIcon />,
    href: '#',
    label: 'YouTube',
    hoverColor: 'hover:bg-red-500',
  },
  {
    icon: <FacebookIcon />,
    href: 'https://www.facebook.com/profile.php?id=100069178915958&locale=es_LA',
    label: 'Facebook',
    hoverColor: 'hover:bg-blue-600',
  },
]

const contactInfo = [
  {
    icon: <MapPinIcon />,
    text: 'Valle de los chillos, Quito, Ecuador',
    href: '#',
  },
  {
    icon: <PhoneIcon />,
    text: '(593) 96 349 4220',
    href: 'tel:+59396349420',
  },
  {
    icon: <PhoneIcon />,
    text: '(593) 98 742 7765',
    href: 'tel:+59398742765',
  },
]

const quickLinks = [
  { name: 'Quienes somos', href: '/quienessomos' },
  { name: 'Emprendimientos', href: '/emprendimientos' },
  { name: 'Voluntariado', href: '/voluntariados' },
  { name: 'Testimonios', href: '/testimonios' },
]

const NewsletterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add newsletter subscription logic here
    console.log('Newsletter subscription submitted')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          placeholder="tu@email.com"
          className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          Suscribirse
          <ArrowRightIcon className="inline ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Logo and mission section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img
                  src="./images/logodefinitivo.png"
                  alt="Fundación Ressurgir Logo"
                  className="h-16 w-16 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-rose-500/10 rounded-full" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 leading-none">FUNDACIÓN</h2>
                <h2 className="text-xl font-bold text-blue-600 leading-none">RESSURGIR</h2>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Transformando vidas y comunidades a través del apoyo, la educación y el empoderamiento. 
              Juntos construimos un futuro mejor para todos.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-gray-600 hover:text-white ${social.hoverColor} group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 -mx-2"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Newsletter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6 text-lg">Contáctanos</h3>
            <ul className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 -mx-2"
                  >
                    <span className="p-2 bg-blue-50 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors">
                      {info.icon}
                    </span>
                    <span className="text-sm">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Subscription */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Boletín Informativo</h4>
              <p className="text-gray-600 text-sm mb-4">
                Mantente al día con nuestras últimas noticias y eventos.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Fundación Ressurgir. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              >
                Política de Privacidad
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              >
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}