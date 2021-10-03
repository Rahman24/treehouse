import "./Card.css";

const EventCard = ({ date, desc = [], img, title, completed = false }) => {
  const options = { hour: "2-digit", minute: "2-digit" };
  const announcementDate = new Date(date.seconds * 1000).toDateString();
  const announcementTime = new Date(date.seconds * 1000).toLocaleTimeString("en-US", options);
  const completedEventClasses = completed ? "opacity-50" : "";

  return (
    <div className="event-card card mx-4 mt-2 mb-3 p-0 rounded">
      <div className="row">
        <div className={completedEventClasses}>
          <img src={img} alt={desc} className="card-img-left event-img" />
        </div>
        <div className="">
          <div className="card-body m-auto text-center">
            <div className="name card-title text-uppercase text-white fw-bold mb-3">{title}</div>
            <div>
              <span className="text-white fw-bold">Date:</span> {announcementDate}&nbsp;
              {announcementTime}
            </div>
            <div className="mt-3 description">
              {desc.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
