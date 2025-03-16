import React, { useState } from 'react';
import { Dialog, DialogContent } from '@components/ui/dialog';
import { Heart, Brain, Stethoscope, RefreshCcw, Users } from 'lucide-react';
import CategoryButton from './CategoryButtons';
import ServiceCard from './ServiceCard';

const FoundationServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: Users },
    { id: 'psychology', name: 'Psicología', icon: Brain },
    { id: 'therapy', name: 'Terapia', icon: Heart },
    { id: 'detox', name: 'Desintoxicación', icon: RefreshCcw },
    { id: 'medical', name: 'Servicios Médicos', icon: Stethoscope },
  ];

  const services = [
    {
      name: 'Consulta Psicológica',
      category: 'psychology',
      description: 'Atención personalizada con especialistas en salud mental para acompañarte en tu proceso de recuperación. Nuestros psicólogos están especializados en adicciones y trauma.',
      impact: 'Cada consulta contribuye a becas de atención psicológica para personas en situación vulnerable.',
      imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80'
    },
    {
      name: 'Terapia Grupal',
      category: 'therapy',
      description: 'Sesiones grupales facilitadas por terapeutas expertos donde podrás compartir experiencias, aprender de otros y desarrollar habilidades de afrontamiento en un ambiente seguro y de apoyo.',
      impact: 'Fortalece la comunidad de apoyo y fomenta la resiliencia colectiva.',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80'
    },
    {
      name: 'Programa de Desintoxicación',
      category: 'detox',
      description: 'Proceso médico supervisado 24/7 para la eliminación segura de sustancias, con monitoreo constante y manejo profesional de síntomas de abstinencia.',
      impact: 'Proporciona una base sólida para iniciar el tratamiento de recuperación a largo plazo.',
      imageUrl: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1b98?auto=format&fit=crop&q=80'
    },
    {
      name: 'Consulta Médica General',
      category: 'medical',
      description: 'Atención médica integral que incluye evaluación física completa, seguimiento de la salud general y coordinación con otros especialistas según sea necesario.',
      impact: 'Garantiza una atención holística y seguimiento médico adecuado durante el proceso de recuperación.',
      imageUrl: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Servicios de la Fundación</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ofrecemos un enfoque integral para el tratamiento de adicciones, combinando atención médica, psicológica y terapéutica para apoyar tu proceso de recuperación.
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

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12">
          {filteredServices.map(service => (
            <ServiceCard
              key={service.name}
              service={service}
              setSelectedService={setSelectedService}
            />
          ))}
        </div>
      </div>

{/* Service Detail Modal */}
<Dialog open={Boolean(selectedService)} onOpenChange={() => setSelectedService(null)}>
  <DialogContent className="bg-white">
    {selectedService && (
      <div className="p-4">
        <img src={selectedService.imageUrl} alt={selectedService.name} className="w-full h-56 object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedService.name}</h2>
        <p className="text-gray-700 mb-4">{selectedService.description}</p>
        <p className="text-sm text-gray-500"><strong>Impacto:</strong> {selectedService.impact}</p>
      </div>
    )}
  </DialogContent>
</Dialog>

    </div>
  );
};

export default FoundationServices;