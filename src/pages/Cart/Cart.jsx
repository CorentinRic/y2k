import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import PRODUCTS from "../../datas/Products";
import { CartItem } from "../Cart/Cart-item";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import emptyCart from "../../assets/images/kyle-johnson-4y9_Du9mZqI-unsplash.webp";

function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <main>
      <section className="cart">
        <div>
          <h2 className="cart__h2">Votre panier</h2>
          <div className="cart__img">
            <img src={emptyCart} alt="Empty cart" />
          </div>
        </div>
        <div className="cart cart__products">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product}  key={product.id} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Total: {totalAmount} €</p>
            <div className="checkout__btn">
              <button className="btn" onClick={() => navigate("/")}>
                {" "}
                Continuer le shopping
              </button>
              <button
                className="btn"
                onClick={() => {
                  checkout();
                  navigate("/checkout");
                }}
              >
                {" "}
                Commander{" "}
              </button>
            </div>
          </div>
        ) : (
          <h3 className="cart__h3">Votre panier est vide.</h3>
        )}
      </section>
    </main>
  );
}

export default Cart;
