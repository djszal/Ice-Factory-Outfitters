import React, { useEffect, useState } from "react";
import "../style/Products.css";
import { getAllProducts, getSingleProduct } from "../api";
import SingleProduct from "./SingleProduct";

const Accessories = (props) => {
  const { setSelectedProduct, selectedProduct } = props;
  // const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setSelectedProduct();
  }, []);

  const filteredProducts = props.products.filter((_product) =>
    _product.category.includes("Accessories")
  );

  return (
    <div className="all-products">
      {selectedProduct ? (
        <SingleProduct selectedProduct={selectedProduct} />
      ) : (
        filteredProducts.map((product) => {
          return (
            <div className="product-container" key={product.id}>
              <div className="single-product">
                <img className="product-thumbnail" src={product.image} />
                <h2 className="headers">{product.name}</h2>
                <h3 className="headers">${product.price}</h3>
                <div className="sub-container">
                  <div className="btn-container">
                    {/* <input
                      className="prod-btn"
                      min={1}
                      type="number"
                      placeholder="quantity"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    ></input> */}
                    <button className="prod-btn">Add to Cart</button>
                    <button
                      className="prod-btn"
                      onClick={() =>
                        getSingleProduct(product.id, setSelectedProduct)
                      }
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Accessories;
