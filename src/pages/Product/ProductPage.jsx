import React, { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./ProductPage.css";
import { ShopContext } from "../../context/shop-context";
import PRODUCTS from "../../datas/Products";
import Scale from "../../components/Scale/Scale";
import Carousel from "../../components/Carousel/Carousel";
import { BsTruck, BsShieldShaded, BsCalendarCheckFill } from "react-icons/bs";

const ProductPage = () => {
  const { addToCart, cartItems } = useContext(ShopContext);

  /* Comparaison de l'ref. */
  const { ref } = useParams();
  const product = PRODUCTS.find((item) => item.ref === ref);

  if (!product) return <Navigate to="/*" />;

  const id = product.id;
  const cartItemCount = cartItems[id];

  return (
    <main className="product">
      <section className="product__section">
        <div className="product__carousel">
          <Carousel slides={product.pictures} />
        </div>
        <div className="product__container">
          <div className="product__content">
            <p>Produit :</p>
            <h2 className="product__name">{product.name}</h2>
            <p className="product__price">{product.price} €</p>
            <p className="product__spec">{product.specification}</p>
            <p className="product__description">{product.text}</p>
            <Scale scaleValue={product.scale} />
            <button
              className="addToCartBttn product__btn"
              onClick={() => addToCart(id)}
            >
              Ajouter au panier {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
            <div className="product__ship">
              <BsTruck />
              <BsCalendarCheckFill />
              <BsShieldShaded />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
