import React from "react";

const ProductDetails = (props) => {
  console.log(props.post);

  return (
    <>
      <div key={props.post.id} className="products">
        <h3 className="productTitle">ID: {props.post.id}</h3>
        <p className="productPrice">Title: {props.post.title}$</p>
        <p className="productCategory">Body: {props.post.body}</p>
        <button className="detailButton" onClick={props.onBackClick}>
          Back To List
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
