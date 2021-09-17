import "./Pass.css";

const EventPass = ({ name, img, start, end, ...rest }) => {
  const currentDate = parseInt(Date.now()/1000);
  const status = (() => {
    if(currentDate < start.seconds) {
      return "Yet to Start";
    }
    if(currentDate > start.seconds && currentDate < end.seconds) {
      return "Ongoing";
    }
    return "Completed"
  })();
  return (
    <div className="event-card card mx-4 mt-2 mb-3 p-0 rounded">
      <div className="mb-3"><img src={img} className="event-img rounded" alt="event pass" /></div>
      <h3 className="text-uppercase text-white text-center mb-4">{name}</h3>
      <div className="text-white text-center mb-4">
        <span className="text-white text-uppercase">
          <span>Event Status: </span> <span className="text-white fw-bold">{status}</span>
        </span>
      </div>
    </div>
  );
};

export default EventPass;
