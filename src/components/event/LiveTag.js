import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { listenEventChange } from "apis/firebase";

import { AppContext } from "contexts/app";

import "./LiveTag.css";

const EventLiveTag = () => {
  const { session } = useContext(AppContext);
  const [liveData, setLiveData] = useState();
  
  useEffect(() => {
    listenEventChange((data) => {
      if (data) {
        return setLiveData(data);
      }
    });
  }, [session]);
  
  const { live: isLive, link, stream_link } = liveData || {};
  const tagClass = isLive ? "bg-color-aquagreen" : "bg-secondary";
  const tagText = isLive ? "Live Now" : "Live Soon";
  const shadowClass = isLive ? "shadow-live" : "shadow-disabled";
  const btnProps = session.accessToken ? { href: link, target: "_blank" } : { href: "/pass" };

  if (!!stream_link) {
    return (
      <Link
        to={`/live?stream=${stream_link}`}
        className={`btn ${tagClass} px-4 rounded-pill ${shadowClass}`}
      >
        {tagText}
      </Link>
    );
  }

  return (
    <a
      rel="noopener noreferrer"
      disabled={!isLive}
      className={`btn ${tagClass} px-4 rounded-pill ${shadowClass}`}
      {...btnProps}
    >
      {tagText}
    </a>
  );
};

export default EventLiveTag;
