import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ViewProductPage() {
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescrip, setProductDescrip] = useState("");

  const navigate = useNavigate();
  const param = useParams();

  // const newProductData = {
  //   name: inputName,
  //   price: inputPrice,
  //   image: inputImageUrl,
  //   description: inputDescription,
  // };

  const getProduct = async () => {
    const result = await axios.get(
      `http://localhost:4001/products/${param.productId}`
    );
    // console.log(result);
    const getData = result.data.data;
    setProductName(getData.name);
    setProductPrice(getData.price);
    setProductImg(getData.image);
    setProductDescrip(getData.description);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <div className="product-preview">
          <img src={productImg} alt="Product Image" width="350" height="350" />
        </div>
        <h2>{productName}</h2>
        <h3>Product price: {productPrice}</h3>
        <p>{productDescrip}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
