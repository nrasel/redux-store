import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="heading">
        Welcome to Redux store
        <section>
          <h3>Products</h3>
          <Products />
        </section>
      </h2>
    </div>
  );
};

export default Home;
