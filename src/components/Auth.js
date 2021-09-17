import { AppContext } from "contexts/app";
import { useContext } from "react";
import { Redirect } from "react-router";

const Authenticate = ({ children }) => {
  const { session } = useContext(AppContext);

  if (session.accessToken) {
    return children;
  }
  return <Redirect to="/profile" />;
};

export default Authenticate;
