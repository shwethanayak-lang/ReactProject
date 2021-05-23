import React, { useState } from "react";

// To display the shopping items

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = useState([
    {
      name: "HimQuen Girl's Walking Running Training & Gym",
      cost: "MRP 589.00",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/811O6t4abWL._UY500_.jpg",
    },
    {
      name: "OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71zlbKfhFsL._SY741_.jpg",
      cost: "MRP 29,999.00",
      width: "20px",
    },
    {
      name: "TraQ Cardio by Titan",
      cost: "MRP 16,999.00",
      image:
        "https://staticimg.titan.co.in/Traq/Catalog/75001PP01_1.jpg?pView=pdp",
    },
    {
      name: "Amazon Brand - Symbol Women Sweatshirt",
      cost: "MRP 434.00 ",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71x8PEzeFiL._UX569_.jpg",
    },
  ]);
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h5>{product.name}</h5>
            <h6>{product.cost}</h6>
            <img src={product.image} alt={product.name} />

            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const renderCart = () => (
    <>
      <h1>Carts</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h5>{product.name}</h5>
            <h6>{product.cost}</h6>
            <img src={product.image} alt={product.name} />

            <button
              onClick={() => {
                removeFromCart(product);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="App">
      <button onClick={() => navigateTo(PAGE_CART)}>
        Go to Cart({cart.length})
      </button>

      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>

      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
};

export default Products;
