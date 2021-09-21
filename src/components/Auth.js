import Layout from "components/Layout";
import { AppContext } from "contexts/app";
import { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router";

const Authenticate = ({ children }) => {
  const { session } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const currentPage = window.location.href.split("/")[3] || "home";
  const redirect = "/login?continue="+currentPage;

  useEffect(() => {
    if (!session.loading) {
      setLoading(false);
    }
  }, [session]);

  if (loading) {
    return (
      <Layout>
        <h3 className="my-5 m-auto text-center text-white text-heading">Loading...Please wait</h3>
      </Layout>
    );
  }

  if (session.accessToken) {
    return children;
  } else {
    return <Redirect to={redirect} />;
  }
};

export default Authenticate;
