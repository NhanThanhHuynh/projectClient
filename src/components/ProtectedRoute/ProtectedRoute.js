import { Spinner } from "react-bootstrap";
import { useContext } from "react";
import { LoginContext } from "../../contexts/Auth";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import "../../css/ProtectedCss.css";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
    authState: { authLoading, isAuthorization },
  } = useContext(LoginContext);
  if (authLoading) {
    return (
      <div className="center-screen position-fixed">
        <Spinner animation="border"  />
      </div>
     
    );
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorization ? (
          <>
            <Component {...rest} {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
