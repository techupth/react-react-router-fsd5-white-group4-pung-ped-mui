import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const getProducts = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      //const results = await axios("http://localhost:4001/products");
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`);
      const updateProducts = products.filter((item) => item.id !== id);
      setProducts(updateProducts);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button onClick={() => navigate("/product/create")}>
          Create Product
        </button>
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <div className="product-preview">
                <img
                  src={product.image}
                  alt="product image"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button
                    className="view-button"
                    onClick={() => navigate(`/product/view/${product.id}`)}
                  >
                    View
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => navigate(`/product/edit/${product.id}`)}
                  >
                    Edit
                  </button>
                </div>
              </div>

              <button
                className="delete-button"
                onClick={() => {
                  handleDelete(product.id);
                }}
              >
                x
              </button>
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
