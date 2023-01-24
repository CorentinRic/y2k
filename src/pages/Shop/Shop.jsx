import React from "react";
import { useState } from "react";
import PRODUCTS from "../../datas/Products";
import Card from "../../components/Card/Card";
import "./Shop.css";
import Categories from "../../components/Categories/Categories";
import banner from "../../assets/images/glade-optics-ttGLlNElbCc-unsplash.webp";
import bannerMobile from "../../assets/images/Mobileglade-optics-ttGLlNElbCc-unsplash.webp";
import useMediaQuery from "../../utils/useMediaQuery";

function Shop() {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = PRODUCTS.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  /* Media queries. */
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <main className="shop">
      <section className="shop__section">
        <div className="banner">
          <div className="banner__content">
            <h1>Y2K</h1>
            <p>Masques de neige - Lunettes</p>
          </div>
          <div className="banner__img">
            {/* Changement de contenu <img /> si la page est supérieur à 600px. */}
            {matches ? (
              <img src={banner} alt="Bannière" />
            ) : (
              <img src={bannerMobile} alt="Bannière" />
            )}
            <img src={banner} alt="Bannière" />
          </div>
        </div>
        <div className="shop__title">
          <h2>Shop</h2>
        </div>
        <Categories
          categories={categories}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <div className="products">
          {PRODUCTS.map((product) =>
            !activeCategory || activeCategory === product.category ? (
              <article key={product.id}>
                <Card data={product} />
              </article>
            ) : null
          )}
        </div>
      </section>
    </main>
  );
}
export default Shop;
