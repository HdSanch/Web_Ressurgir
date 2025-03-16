import React from 'react';

const ServiceCard = ({ service, setSelectedService }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => setSelectedService(service)}
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={service.imageUrl} 
            alt={service.name}
            className="h-48 w-full object-cover md:h-full"
          />
        </div>
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wide text-sm text-[#1B8FBD] font-semibold">
            {service.name}
          </div>
          <p className="mt-2 text-gray-500">
            {service.description}
          </p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {service.availableSpots} cupos disponibles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;