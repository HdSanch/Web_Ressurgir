import React from 'react';

const CategoryButton = ({ id, name, Icon, activeCategory, setActiveCategory }) => {
  return (
    <button
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
  );
};

export default CategoryButton;
