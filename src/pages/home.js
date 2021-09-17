import { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router";

import Layout from "components/Layout";
import Loader from "components/Loader";
import { getProfileDetails } from "apis/firebase";
import { AppContext } from "contexts/app";

const HomePage = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { session, setSession } = useContext(AppContext);

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
  	<Loader loading={loading}>
      {session.accessToken ? (
        <Layout></Layout>
      ) : (
        <Redirect to="/login" />
      )}
    </Loader>
  );
};

export default HomePage;
