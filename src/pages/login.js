import { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router";

import Loader from "components/Loader";
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

  return (
    <Layout>
      <div className="container event-pass-page">
        <h1 className="text-white text-uppercase text-center my-5 heading">Event Passes</h1>
        <Loader loading={loading}>
          {session.accessToken ? (
            <Redirect to="/" />
          ) : (
            <div className="m-auto text-center my-2">
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
