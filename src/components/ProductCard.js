import React from "react";
import prod from "../images/product_01.jpg";
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined, HeartOutlined  } from '@ant-design/icons';


const ProductCard = () => {
  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
      <div className="item">
        <div className="image">
          <img src={prod} alt="product_img" />
        </div>
        <div className="description">
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>
        <div className="quantity">
        <button className="minus-btn" type="button" name="button">
          <MinusCircleOutlined />
          </button>
          <input type="text" name="name" value="1" />
          <button className="plus-btn" type="button" name="button">
          <PlusCircleOutlined />
          </button>
        </div>
        <div className="total-price">$549</div>
        <div className="buttons">
        <DeleteOutlined />
        </div>
      </div>
      <div className="item">
        <div className="image">
          <img src={prod} alt="product_img" />
        </div>
        <div className="description">
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>
        <div className="quantity">
        <button className="minus-btn" type="button" name="button">
          <MinusCircleOutlined />
          </button>
          <input type="text" name="name" value="1" />
          <button className="plus-btn" type="button" name="button">
          <PlusCircleOutlined />
          </button>
        </div>
        <div className="total-price">$549</div>
        <div className="buttons">
        <DeleteOutlined />
        </div>
      </div>
      <div className="item">
        <div className="image">
          <img src={prod} alt="product_img" />
        </div>
        <div className="description">
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>
        <div className="quantity">
        <button className="minus-btn" type="button" name="button">
          <MinusCircleOutlined />
          </button>
          <input type="text" name="name" value="1" />
          <button className="plus-btn" type="button" name="button">
          <PlusCircleOutlined />
          </button>
        </div>
        <div className="total-price">$549</div>
        <div className="buttons">
        <DeleteOutlined />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
