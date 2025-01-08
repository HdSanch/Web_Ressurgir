import React from 'react';
import { Badge } from '@components/ui/badge';
import { Alert, AlertDescription } from '@components/ui/alert';
import { Card, CardContent } from '@components/ui/card';

const EntrepreneurCard = ({ entrepreneur, setSelectedProduct }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className={`flex flex-col lg:flex-row ${entrepreneur.index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
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
  );
};

export default EntrepreneurCard;
