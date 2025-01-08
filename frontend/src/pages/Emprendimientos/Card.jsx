import React from 'react';
import { Card, CardContent } from '@components/ui/card.jsx';
import { Badge } from '@components/ui/badge.jsx';
import { Alert, AlertDescription } from '@components/ui/alert.jsx';
import { Button } from '@components/ui/button';

const EntrepreneurCard = ({ entrepreneur, onProductClick }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="cardContent">
        <div className="flex flex-col lg:flex-row">
          {/* Entrepreneur Profile */}
          <div className="cardProfile">
            <img
              src={entrepreneur.imageUrl}
              alt={entrepreneur.name}
              className="rounded-full mb-4"
            />
            <h2>{entrepreneur.name}</h2>
            <Badge variant="secondary" className="mb-4">
              {entrepreneur.role}
            </Badge>
            <p>{entrepreneur.yearsClean} años de recuperación exitosa</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {entrepreneur.achievements.map((achievement, i) => (
                <Badge key={i} variant="outline">
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-2/3 p-8">
            <Alert>
              <AlertDescription>{entrepreneur.story}</AlertDescription>
            </Alert>
            <div className="cardProducts">
              {entrepreneur.products.map((product) => (
                <div
                  key={product.id}
                  className="productCard"
                  onClick={() => onProductClick(product)}
                >
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="productImage"
                  />
                  <div className="productInfo">
                    <h3 className="productTitle">{product.name}</h3>
                    <p className="productDescription">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="productPrice">{product.price}</span>
                      <span className="productSpots">{product.availableSpots} disponibles</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EntrepreneurCard;
