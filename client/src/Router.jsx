import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateProductPage from "./pages/CreateProductPage";
import HomePage from "./pages/HomePage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/product/create", element: <CreateProductPage /> },
  { path: "/product/view/:productId", element: <ViewProductPage /> },
  { path: "/product/edit/:productId", element: <EditProductPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
