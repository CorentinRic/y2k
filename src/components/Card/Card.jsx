import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import "./Card.css";
import Scale from "../Scale/Scale";

function Card(props) {
  const { id, name, price, cover, ref, scale } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="card">
      <div className="card__link">
        <Link to={`/product/${ref}`}>
          <div className="card__img">
            <img src={cover} alt={name} />
          </div>
          <div className="description">
            <p>
              <b>{name}</b>
            </p>
            <p>{price}€</p>
            <Scale scaleValue={scale} />
          </div>
        </Link>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Ajouter au panier {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
}
export default Card;
