import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductForm from "./pages/CreateProductPage";
import EditProductForm from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductForm />} />
          <Route
            path="/product/edit/:productId"
            element={<EditProductForm />}
          />
          <Route
            path="/product/view/:productId"
            element={<ViewProductPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
