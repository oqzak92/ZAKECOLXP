import React from "react";

const ProductCard = ({ title, imageSrc, description, price }) => {
  return (
    <article className="product-card">
      <header>
        <h1>{title}</h1>
      </header>
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <section>
        <p>{description}</p>
      </section>
      <section>
        <p>Prix : {price} €</p>
      </section>
      <footer>
        <button>Ajouter au panier</button>
      </footer>
    </article>
  );
};

export default ProductCard; 