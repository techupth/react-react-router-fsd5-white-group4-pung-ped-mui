import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const [inputName, setInputName] = useState("");
  const [inputImageUrl, setInputImageUrl] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  const [inputDescription, setInputDescription] = useState("");

  const navigate = useNavigate();

  const addNewProduct = async () => {
    try {
      const newProductData = {
        name: inputName,
        price: inputPrice,
        image: inputImageUrl,
        description: inputDescription,
      };
      await axios.post("http://localhost:4001/products", newProductData);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewProduct();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setInputName(event.target.value);
            }}
            value={inputName}
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
              setInputImageUrl(e.target.value);
            }}
            value={inputImageUrl}
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
              setInputPrice(e.target.value);
            }}
            value={inputPrice}
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
              setInputDescription(e.target.value);
            }}
            value={inputDescription}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
