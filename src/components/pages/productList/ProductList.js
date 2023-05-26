import React, { useContext, useState } from "react";
import "./ProductList.css";
import { ProductContext } from "../../context/Product";

const ProductList = () => {
  const { allProducts, isLoading } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return (
    <>
      <h1>{isLoading ? "Loading..." : `Products (${allProducts.length})`}</h1>
      <div className="product-list-container">
        <div className="product-list">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isLoading ? (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                disabled={page === currentPage}
                className={page === currentPage ? "active" : ""}
              >
                {page}
              </button>
            )
          )}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductList;
