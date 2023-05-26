import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";

const WithAuth = (ProtectedComponent) => {
  const { token } = useContext(AuthContext);
  return function () {
    if (token) {
      return <ProtectedComponent />;
    } else {
      return (
        <>
          <h3>You are not authorized to add new product.</h3>
          <h4>Please login as Admin using the button at Top Right Corner</h4>
        </>
      );
    }
  };
};

export default WithAuth;
