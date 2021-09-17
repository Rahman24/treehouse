import Layout from "components/Layout";

import comingSoon from "assets/images/coming_soon.png";

const TeamPage = () => {
  return (
    <Layout>
      <div className="container event-pass-page">
        {/* <h3 className="text-white my-5 text-center heading text-uppercase">Our Team</h3> */}
        <div className="m-auto text-center justify-content-center my-5">
          <img className="img img-fluid" src={comingSoon} alt="Coming soon" />
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
