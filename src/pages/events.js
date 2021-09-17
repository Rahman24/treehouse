import EventsList from "components/event/List";

import Layout from "components/Layout";

const EventsPage = () => {
  return (
    <Layout>
      <div className="events-list-page container px-0 py-5">
        <EventsList />
      </div>
    </Layout>
  );
};

export default EventsPage;
