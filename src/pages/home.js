import Layout from "components/Layout";
import Announcements from "components/announcements/List";

const HomePage = () => {
  return (
    <Layout>
    	<div className="events-list-page container px-0 py-5">
	      <Announcements />
	    </div>
    </Layout>
  );
};

export default HomePage;
