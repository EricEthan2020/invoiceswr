import Dashboard from "./pages/Dashboard";
import SalePage from "./pages/SalePage";
import Productspage from "./pages/Productspage";
import VoucherPage from "./pages/VoucherPage";
import NotFoundPage from "./pages/NotFoundPage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./component/Layout";
import ProductCreatePage from "./pages/ProductCreatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      }, 
      {
        path: "sales",
        element: <SalePage />,
      },
      {
        path: "products",
        element: <Productspage />,
      },
      {
        path: "/product/create",
        element: <ProductCreatePage />,
      },
      {
        path: "voucher",
        element: <VoucherPage />,
      },
    ],
  },
]);

export default router;
