import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios.get("http://localhost:4001/products");
      setProducts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button onClick={() => navigate("/product/create")}>
          Create Product
        </button>
      </div>
      <div className="product-list">
        {products.map((product, id) => {
          return (
            <div className="product" key={id}>
              <div className="product-preview">
                <img
                  src={product.image}
                  alt={product.name}
                  width="250px"
                  height="250px"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button
                    className="view-button"
                    onClick={() => navigate("/product/view/:productId")}
                  >
                    View
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => navigate("/product/edit/:productId")}
                  >
                    Edit
                  </button>
                </div>
              </div>

              <button className="delete-button">x</button>
            </div>
          );
        })}
      </div>
      {isError ? <h1>Request failed</h1> : null}
      {isLoading ? <h1>Loading ....</h1> : null}
    </div>
  );
}

export default HomePage;
