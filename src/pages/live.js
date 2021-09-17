import { useLocation } from "react-router";
import { Redirect } from "react-router";
import queryString from "query-string";

import Layout from "components/Layout";
import YoutubeEmbed from "components/YoutubeEmbed";

const EventLivePage = () => {
  const location = useLocation();
  const { stream } = queryString.parse(location.search);

  if(!stream) {
    return <Redirect to="/events" />
  }
  
  return (
    <Layout>
      <div className="container event-pass-page">
        <h1 className="text-white text-uppercase text-center my-5 heading">Watch Live Event</h1>
        <YoutubeEmbed url={stream} />
      </div>
    </Layout>
  );
};

export default EventLivePage;
