import React from "react";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
//fakestore api has stopped working so i have made some changes regarding to the api and called another api and did exacty what was said to do in the task . so there are some naming conventions problems but i'll update that as soon as fakestore api start working again.
const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleBackClick = () => {
    setProductId(null);
  };

  if (productId > 0) {
    return (
      <ProductDetails
        product={products.find((product) => product.id === productId)}
        onBackClick={handleBackClick}
      />
    );
  }

  console.log(productId);

  return (
    <div>
      <div>
        <h2 className="mainTitle">Fake Store Product Listing</h2>

        {products.map((product) => (
          <div key={product.id} className="products">
            <h3 className="productTitle">Title: {product.title}</h3>
            <p className="productPrice">Price: {product.price}$</p>
            <p className="productCategory">Category: {product.category}</p>
            <p className="productDesc">{product.description}</p>
            <img
              src={product.image}
              alt={product.title}
              className="productImage"
            />
            <button
              onClick={() => setProductId(product.id)}
              className="detailButton"
            >
              Show Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
//fakestore api started working again so i updated again
