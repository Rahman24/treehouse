import { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router";

import Layout from "components/Layout";
import Profile from "components/Profile";
import EventPassList from "components/event/PassList";
import AuthButton from "components/button/Auth";

import { getProfileDetails } from "apis/firebase";

import { AppContext } from "contexts/app";

const EventPassPage = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { session, setSession } = useContext(AppContext);

  const handleAuthFailure = (response) => {
    const { errorCode, errorMessage } = response;
    alert(`${errorCode}: ${errorMessage}`);
  };

  const handleAuthSuccess = (response) => {
    setSession(response);
    return <Redirect to="/" />;
  };

  useEffect(() => {
    if(!session.loading) {
      setLoading(false);
    }
  }, [session])

  useEffect(() => {
    if (session.accessToken) {
      setLoading(true);
      getProfileDetails()
        .then((response) => {
          setProfile(response);
        })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          throw err;
        });
    }
  }, [session]);
  
  const Loader = ({ loading, children }) => {
  	return loading ? (
  	  <h3 className="text-white my-5 m-auto text-center">Signing in with your Student Mail ID...</h3>
  	) : (
  	  children
  	);
	};

  return (
    <Layout>
      <div className="container event-pass-page">
        <Loader loading={loading}>
          {session.accessToken ? (
            <Redirect to="/" />
          ) : (
            <div className="m-auto text-center my-2">
			        <h1 className="text-white text-uppercase text-center my-5 heading">Seems you haven't signed in yet!! Pleas signin with your @student.onlinedegree.iitm.ac.in account to get started!!</h1>
              <AuthButton onAuthSuccess={handleAuthSuccess} onAuthFailure={handleAuthFailure} />
            </div>
          )}
        </Loader>
        <h6 className="text-center my-5 mx-5" style={{color:"rgba(255,255,255,0.6)"}}>
        	If you face any issues signing in with your student mail id or if you can't see your registered event passes, please let us know: <a href="mailto:21f1005287@student.onlinedegree.iitm.ac.in" className="text-white">Web Team</a>
        </h6>
      </div>
    </Layout>
  );
};

export default EventPassPage;
