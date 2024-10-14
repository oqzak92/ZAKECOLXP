import React from 'react';
import ProductCard from './ProductCard';
import './App.css'; // Import CSS file



const App = () => {
  return (
    <div>
      <ProductCard
        title="Youness"
        imageSrc="chauss.png"
        description="Chaussure pour Youness qui aime les pattes"
        price="0,50"
      />
      <ProductCard
        title="Soinia"
        imageSrc="chauss.png"
        description="Chaussure pour Youness qui aime les pattes"
        price="50"
      />
    </div>
  );
};

export default App;
