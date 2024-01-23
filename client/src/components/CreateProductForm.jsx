import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateProductForm() {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [descriptionInput, setDescriptionInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  };

  const createProduct = async () => {
    try {
      const newProduct = {
        name: nameInput,
        image: imageInput,
        price: priceInput,
        description: descriptionInput,
      };
      await axios.post(`http://localhost:4001/products`, newProduct);
      navigate("/");
    } catch (err) {
      alert("Error creating product");
    }
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
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
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
            onChange={(e) => setImageInput(e.target.value)}
            value={imageInput}
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
            onChange={(e) => setPriceInput(e.target.value)}
            value={priceInput}
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
            onChange={(e) => setDescriptionInput(e.target.value)}
            value={descriptionInput}
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
