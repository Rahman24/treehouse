import { Redirect } from "react-router";

import Layout from "components/Layout";
import { getProfileDetails } from "apis/firebase";

const HomePage = () => {
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
