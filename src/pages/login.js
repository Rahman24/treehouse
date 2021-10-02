import { useContext, useEffect } from "react";
import { Redirect } from "react-router";

import Layout from "components/Layout";
import AuthButton from "components/button/Auth";
import Footer from "components/Footer";

import { AppContext } from "contexts/app";

import treehouse_banner from "assets/images/banner.png";

const LoginPage = () => {
  const { session, setSession } = useContext(AppContext);
  const redirect = window.sessionStorage.prev || "/";

  const handleAuthFailure = (response) => {
    const { errorCode, errorMessage } = response;
    alert(`${errorCode}: ${errorMessage}`);
  };

  const handleAuthSuccess = (response) => {
    setSession(response);
  };

  if(session.accessToken) {
    return <Redirect to={redirect} />;
  }
  
  return (
    <main className="bg-color">
      <div style={{ paddingTop: "1rem", minHeight: "75vh" }}>
      <div className="container event-pass-page">
        <div className="m-4 text-center">
        	<img src={treehouse_banner} style={{ width:"70%", paddingBottom: "2rem" }} />
          <h1 className="text-center text-white mb-4 heading text-uppercase">
          	Welcome to Treehouse!!
          </h1>
          <p className="text-center text-white mb-5">
            Please sign in with your IIT Madras Student Email ID to get started!
          </p>
          <AuthButton onAuthSuccess={handleAuthSuccess} onAuthFailure={handleAuthFailure} />
        </div>
        <h6 className="text-center my-5 mx-5" style={{ color: "rgba(255,255,255,0.6)" }}>
          If you face any issues signing in with your student mail id, please let us know: <br />
          <a href="mailto:21f1005287@student.onlinedegree.iitm.ac.in" className="text-white">
            Web Team
          </a>
        </h6>
      </div>
      </div>
      <Footer />
    </main>
  );
};

export default LoginPage;