import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@components/ui/dialog';
import { Heart, Share2, MessageCircle, ChevronRight, Tag, Award, Users } from 'lucide-react';
import CategoryButton from './CategoryButtons.jsx';
import EntrepreneurCard from './Card.jsx';

const PatientEntrepreneurship = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: Users },
    { id: 'art', name: 'Arte y Creatividad', icon: Heart },
    { id: 'crafts', name: 'Artesanías', icon: Award },
  ];

  const emprendimientos = [
    {
      name: 'Leslie Alexander',
      role: 'Artista Visual',
      category: 'art',
      story: 'A través del arte, Leslie encontró un camino hacia la recuperación y el autodescubrimiento. Hoy, comparte su talento y experiencia para inspirar a otros.',
      yearsClean: 3,
      achievements: ['Premio Local de Arte 2023', 'Mentor de 5 estudiantes'],
      imageUrl: new URL('@images/images_empre/retrato3.jpg', import.meta.url).href,
      products: [
        {
          id: 1,
          name: 'Retrato Personalizado',
          description: 'Retratos que capturan la esencia y el viaje personal de cada individuo',
          price: '$120.00',
          imageSrc: new URL('@images/images_empre/pintura.jpg', import.meta.url).href, 
          impact: 'Cada compra contribuye a talleres de arte para pacientes en recuperación',
          availableSpots: 3
        },
        {
          id: 2,
          name: 'Taller de Arte Terapéutico',
          description: 'Sesiones grupales de arte como herramienta de expresión y sanación',
          price: '$45.00/sesión',
          imageSrc: new URL('@images/images_empre/pintura.jpg', import.meta.url).href, 
          impact: 'Las ganancias apoyan becas para terapia artística',
          availableSpots: 5
        }
      ]
    },
    {
      name: 'Michael Foster',
      role: 'Artesano en Cuero',
      category: 'crafts',
      story: 'Michael transformó su pasión por el trabajo en cuero en un negocio próspero, demostrando que la recuperación puede ser el inicio de algo extraordinario.',
      yearsClean: 5,
      achievements: ['Certificación en Artesanía', 'Mentor del Año 2023'],
      imageUrl: new URL('@images/images_empre/retrato.jpg', import.meta.url).href,
      products: [
        {
          id: 3,
          name: 'Cartera Artesanal',
          description: 'Carteras hechas a mano con cuero de alta calidad',
          price: '$85.00',
          imageSrc: new URL('@images/images_empre/pintura2.jpg', import.meta.url).href,
          impact: 'Empleamos y capacitamos a personas en recuperación',
          availableSpots: 8
        }
      ]
    }
  ];

  const filteredEntrepreneurs = activeCategory === 'all' 
    ? emprendimientos 
    : emprendimientos.filter(e => e.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Emprendimientos que Inspiran</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Celebramos el espíritu emprendedor y la resiliencia de nuestros pacientes...
        </p>
      </div>

      {/* Categories Navigation */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(({ id, name, icon: Icon }) => (
            <CategoryButton 
              key={id} 
              id={id} 
              name={name} 
              Icon={Icon} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory}
            />
          ))}
        </div>
      </div>

      {/* Entrepreneurs Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12">
          {filteredEntrepreneurs.map((entrepreneur, index) => (
            <EntrepreneurCard
              key={entrepreneur.name}
              entrepreneur={entrepreneur}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={Boolean(selectedProduct)} onOpenChange={() => setSelectedProduct(null)}>
        {/* Modal content here */}
      </Dialog>
    </div>
  );
};

export default PatientEntrepreneurship;
