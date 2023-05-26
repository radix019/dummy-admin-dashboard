import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/navbar/Navbar";
import AddProduct from "./components/AddProduct";
import { PAGES } from "./components/global/constants";
import WithAuth from "./components/SecuredRoutes/withAuth";

function App() {
  const ProtectedRoute = WithAuth(AddProduct);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          element={<Navigate replace to={`/${PAGES.PRODUCT_LIST}`} />}
          path="/"
        />
        <Route element={<ProductList />} path={`/${PAGES.PRODUCT_LIST}`} />
        <Route
          element={<ProtectedRoute />}
          path={`/${PAGES.ADD_NEW_PRODUCT}`}
        />
      </Routes>
    </div>
  );
}

export default App;
