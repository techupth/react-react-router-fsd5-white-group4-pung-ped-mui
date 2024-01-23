import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ViewProductPage() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescr, setProductDescr] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    allProducts();
  }, []);

  const allProducts = async () => {
    try {
      const resp = await axios.get(
        `http://localhost:4001/products/${param.productId}`
      );
      setProductName(resp.data.data.productName);
      setProductImage(resp.data.data.productImage);
      setProductPrice(resp.data.data.productPrice);
      setProductDescr(resp.data.data.productDescr);
    } catch (err) {
      alert("error Unable to retrieve all products");
    }
  };

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <div className="product-preview">
          <img
            src={productImage}
            alt={productName}
            width="350px"
            height="350px"
          />
        </div>
        <h2>Product name: {productName}</h2>
        <h3>Product price: {productPrice}</h3>
        <p>{productDescr}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
