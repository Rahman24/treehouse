import { useContext, useEffect } from "react";
import { Redirect } from "react-router";

import Layout from "components/Layout";
import AuthButton from "components/button/Auth";

import { AppContext } from "contexts/app";

const LoginPage = () => {
  const { session, setSession } = useContext(AppContext);

  const handleAuthFailure = (response) => {
    const { errorCode, errorMessage } = response;
    alert(`${errorCode}: ${errorMessage}`);
  };

  const handleAuthSuccess = (response) => {
    setSession(response);
  };

  if(session.accessToken) {
    return <Redirect to="/" />;
  }
  
  return (
    <Layout>
      <div className="container event-pass-page">
        <div className="m-auto text-center my-2">
          <h5 className="text-white text-uppercase text-center my-5 heading">
            You haven't signed in yet.
          </h5>
          <p className="text-center text-white mb-5">
            Please signin with your @student.onlinedegree.iitm.ac.in account to get started!!
          </p>
          <AuthButton onAuthSuccess={handleAuthSuccess} onAuthFailure={handleAuthFailure} />
        </div>
        <h6 className="text-center my-5 mx-5" style={{ color: "rgba(255,255,255,0.6)" }}>
          If you face any issues signing in with your student mail id, please let us know:{" "}
          <a href="mailto:21f1005287@student.onlinedegree.iitm.ac.in" className="text-white">
            Web Team
          </a>
        </h6>
      </div>
    </Layout>
  );
};

export default LoginPage;
