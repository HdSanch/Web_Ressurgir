import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@components/ui/dialog.jsx';
import { Button } from '@components/ui/button.jsx';
import CategoryButtons from './CategoryButtons.jsx';
import EntrepreneurCard from './Card.jsx';

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
    // Emprendedores definidos aquí...
  ];

  const filteredEntrepreneurs = activeCategory === 'all'
    ? emprendimientos
    : emprendimientos.filter(e => e.category === activeCategory);

  return (
    <div className="container">
      <CategoryButtons categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div className="cardContainer">
        {filteredEntrepreneurs.map((entrepreneur) => (
          <EntrepreneurCard
            key={entrepreneur.name}
            entrepreneur={entrepreneur}
            onProductClick={setSelectedProduct}
          />
        ))}
      </div>

      {/* Modal */}
      <Dialog open={Boolean(selectedProduct)} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent>
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
              <p>{selectedProduct.description}</p>
              <div>
                <h4>Impacto Social</h4>
                <p>{selectedProduct.impact}</p>
              </div>
              <div>
                <span>{selectedProduct.price}</span>
                <span>{selectedProduct.availableSpots} espacios disponibles</span>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                  Cerrar
                </Button>
                <Button>Contactar</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PatientEntrepreneurship;
