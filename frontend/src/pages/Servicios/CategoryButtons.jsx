import React from 'react';

const CategoryButton = ({
  id,
  name,
  Icon,
  activeCategory,
  setActiveCategory,
}) => {
  const isActive = activeCategory === id;

  return (
    <button
      onClick={() => setActiveCategory(id)}
      className={`
        flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
        ${isActive 
          ? 'bg-[#1B8FBD] text-white shadow-lg scale-105' 
          : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105'}
      `}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{name}</span>
    </button>
  );
};

export default CategoryButton;