import React from 'react';
import { Users, Heart, Award, MessageCircle } from 'lucide-react';

const CategoryButtons = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="categoryButtons">
      {categories.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveCategory(id)}
          className={`categoryButton ${activeCategory === id ? 'active' : ''}`}
        >
          <Icon className="w-5 h-5 mr-2" />
          {name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
