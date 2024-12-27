import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Heart, Share2, MessageCircle, ChevronRight, Tag, Award, Users } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

const PatientEntrepreneurship = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Todos', icon: Users },
    { id: 'art', name: 'Arte y Creatividad', icon: Heart },
    { id: 'crafts', name: 'Artesanías', icon: Award },
    { id: 'services', name: 'Servicios', icon: MessageCircle }
  ];

  const emprendimientos = [
    {
      name: 'Leslie Alexander',
      role: 'Artista Visual',
      category: 'art',
      story: 'A través del arte, Leslie encontró un camino hacia la recuperación y el autodescubrimiento. Hoy, comparte su talento y experiencia para inspirar a otros.',
      yearsClean: 3,
      achievements: ['Premio Local de Arte 2023', 'Mentor de 5 estudiantes'],
      imageUrl: '/images_empre/retrato3.jpg',
      products: [
        {
          id: 1,
          name: 'Retrato Personalizado',
          description: 'Retratos que capturan la esencia y el viaje personal de cada individuo',
          price: '$120.00',
          imageSrc: '/images_empre/pintura.jpg',
          impact: 'Cada compra contribuye a talleres de arte para pacientes en recuperación',
          availableSpots: 3
        },
        {
          id: 2,
          name: 'Taller de Arte Terapéutico',
          description: 'Sesiones grupales de arte como herramienta de expresión y sanación',
          price: '$45.00/sesión',
          imageSrc: '/images_empre/pintura.jpg',
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
      imageUrl: '/images_empre/retrato2.jpeg',
      products: [
        {
          id: 3,
          name: 'Cartera Artesanal',
          description: 'Carteras hechas a mano con cuero de alta calidad',
          price: '$85.00',
          imageSrc: '/images_empre/pintura2.jpg',
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
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
          Emprendimientos que Inspiran
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Celebramos el espíritu emprendedor y la resiliencia de nuestros pacientes, 
          transformando desafíos en oportunidades de crecimiento.
        </p>
      </div>

      {/* Categories Navigation */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                activeCategory === id 
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Entrepreneurs Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12">
          {filteredEntrepreneurs.map((entrepreneur, index) => (
            <Card key={entrepreneur.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className={`flex flex-col lg:flex-row ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Entrepreneur Profile */}
                  <div className="lg:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={entrepreneur.imageUrl}
                        alt={entrepreneur.name}
                        className="w-32 h-32 rounded-full shadow-lg mb-4"
                      />
                      <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {entrepreneur.name}
                      </h2>
                      <Badge variant="secondary" className="mb-4">
                        {entrepreneur.role}
                      </Badge>
                      <p className="text-sm text-gray-600 mb-4">
                        {entrepreneur.yearsClean} años de recuperación exitosa
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {entrepreneur.achievements.map((achievement, i) => (
                          <Badge key={i} variant="outline">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Products Section */}
                  <div className="lg:w-2/3 p-8">
                    <div className="mb-6">
                      <Alert>
                        <AlertDescription>
                          {entrepreneur.story}
                        </AlertDescription>
                      </Alert>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {entrepreneur.products.map((product) => (
                        <div
                          key={product.id}
                          className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <div className="aspect-w-3 aspect-h-2">
                            <img
                              src={product.imageSrc}
                              alt={product.name}
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-blue-600 font-bold">
                                {product.price}
                              </span>
                              <span className="text-sm text-gray-500">
                                {product.availableSpots} disponibles
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={Boolean(selectedProduct)} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.imageSrc}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-gray-600">{selectedProduct.description}</p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">
                  Impacto Social
                </h4>
                <p className="text-sm text-blue-600">{selectedProduct.impact}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  {selectedProduct.price}
                </span>
                <span className="text-sm text-gray-500">
                  {selectedProduct.availableSpots} espacios disponibles
                </span>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                  Cerrar
                </Button>
                <Button onClick={() => setSelectedProduct(null)}>
                  Contactar
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PatientEntrepreneurship;