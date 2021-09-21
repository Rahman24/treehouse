import { useState, useEffect, useContext } from "react";
import { getMessaging, getToken } from "firebase/messaging";

import { getEvents, updateFCMTokenToDB } from "apis/firebase";

import EventCard from "components/event/Card";
import Loader from "components/Loader";

import { ANNOUNCEMENT_CATEGORIES } from "constants/app-defaults";

import { getSortedEventsByCategory } from "helpers/event";

import { AppContext } from "contexts/app";

import "components/event/List.css";

const { generalAnnouncements: general, courseAnnouncements: course, houseAnnouncements: house } = ANNOUNCEMENT_CATEGORIES;

const Announcements = () => {
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [eventsByCategory, setEventsByCategory] = useState({});
  const [notify, setNotify] = useState(false);
  const [activeCategory, setActiveCategory] = useState(general.name);
  const { session } = useContext(AppContext);

  const handleCategorySelection = (event) => {
    setActiveCategory(event.target.value);
  };

  useEffect(() => {
    /*eslint no-undef: "off"*/
    getEvents()
      .then((response = []) => {
        const eventsObj = getSortedEventsByCategory(response);
        setEventsByCategory(eventsObj);
        setLoadingEvents(false);
      })
      .catch((err) => {
        setLoadingEvents(false);
        throw err;
      });
  }, []);

  useEffect(() => {
    if (session.accessToken && Notification.permission === "granted") {
      setNotify(true);
    }
  }, [session]);

  const registerForNotification = () => {
    if (session.accessToken && window.confirm("Do you want to receive notifications for upcoming events?")) {
      const messaging = getMessaging();
      getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY })
        .then((token) => {
          updateFCMTokenToDB({ fcm: token });
          setNotify(true);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const renderNotifyButton = () => {
    return (
      <div className="m-auto text-center my-4">
        {notify ? (
          <span className="btn btn-info register-button rounded-pill px-5">
            You will be notified of events
          </span>
        ) : (
          <button
            className="btn register-button rounded-pill bg-color-black px-5 btn-box-shadow-black text-white"
            onClick={registerForNotification}
          >
            Get Notified of Announcements
          </button>
        )}
      </div>
    );
  };

  const eventList = eventsByCategory[activeCategory] || [];
  return (
    <div className="events-list">
      <br /><br />
      <div
        className="btn-group event-category-group mb-5"
        role="group"
        aria-label="Event Category radio group"
      >
        <input
          type="radio"
          className="btn-check"
          name="activeCategory"
          value={general.name}
          id="btnradio1"
          autoComplete="off"
          onChange={handleCategorySelection}
          checked={activeCategory === general.name}
        />
        <label className="btn btn-outline-green text-uppercase fw-bold" htmlFor="btnradio1">
          General
        </label>

        <input
          type="radio"
          className="btn-check"
          name="activeCategory"
          value={course.name}
          id="btnradio2"
          autoComplete="off"
          onChange={handleCategorySelection}
          checked={activeCategory === course.name}
        />
        <label className="btn btn-outline-green text-uppercase fw-bold" htmlFor="btnradio2">
          Course
        </label>

        <input
          type="radio"
          className="btn-check"
          name="activeCategory"
          value={house.name}
          id="btnradio3"
          autoComplete="off"
          onChange={handleCategorySelection}
          checked={activeCategory === house.name}
        />
        <label className="btn btn-outline-green text-uppercase fw-bold" htmlFor="btnradio3">
          House
        </label>
      </div>

      <Loader loading={loadingEvents}>
        <div className="m-auto justify-content-center d-flex event-card-list">
          {eventList.map((eventObj) => (
            <EventCard key={eventObj.desc} {...eventObj} />
          ))}
          {eventList.length === 0 && (
            <h4 className="text-center text-uppercase text-white m-auto">
              There are no Announcements made yet!!
            </h4>
          )}
        </div>
        {session.accessToken && renderNotifyButton()}
      </Loader>
    </div>
  );
};

export default Announcements;
