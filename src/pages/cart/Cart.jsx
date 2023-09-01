import React from "react";
import "./styles.scss";
import ProductCard from "../../components/ProductCard";

const Cart = () => {
  return (
    <>
      <div className="top_heading">Your Cart Items</div>
      <div className="main_cart">
        <div className="product_cart">
          <ProductCard />
        </div>
        <div className="checkout">
          <div className="title">Total Price</div>
          <div className="horizontal"></div>
          <div className="item">
            <h2>Total:</h2>
            <span>$900</span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
