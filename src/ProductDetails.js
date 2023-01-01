import React from "react";

const ProductDetails = (props) => {
  console.log(props.product);

  return (
    <>
      <div key={props.product.id} className="products">
        <h3 className="productTitle">Title: {props.product.title}</h3>
        <p className="productPrice">Price: {props.product.price}$</p>
        <p className="productCategory">Category: {props.product.category}</p>
        <p className="productDesc">{props.product.description}</p>
        <img
          src={props.product.image}
          alt={props.product.title}
          className="productImage"
        />
        <button className="detailButton" onClick={props.onBackClick}>
          Back To List
        </button>
      </div>
    </>
  );
};

export default ProductDetails;

