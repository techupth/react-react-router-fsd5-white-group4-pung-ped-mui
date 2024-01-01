import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const navigate = useNavigate();
  const param = useParams();

  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescrip, setProductDescrip] = useState("");

  const editedProduct = async () => {
    try {
      const updateProductData = {
        name: productName,
        price: productPrice,
        image: productImg,
        description: productDescrip,
      };
      await axios.put(
        `http://localhost:4001/products/${param.productId}`,
        updateProductData
      );
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editedProduct();
  };
  //(HTML method:GET) API สำหรับดึงข้อมูลสินค้าด้วย Id ***ดึงข้อมูลแสดงที่ input form
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
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            value={productName}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              setProductImg(e.target.value);
            }}
            value={productImg}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
            value={productPrice}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              setProductDescrip(e.target.value);
            }}
            value={productDescrip}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
