import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts, StatusType } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  let { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === StatusType.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === StatusType.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
