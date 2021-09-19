import { NavLink } from "react-router-dom";

import EventLiveTag from "components/event/LiveTag";

import "./Default.css";
import banner from "assets/images/banner.png";

const LINKS = [
  {
    to: "/",
    label: "Announcements",
  },
  {
    to: "/events",
    label: "Events List",
  },
  {
    to: "/profile",
    label: "Profile",
  },
  {
    to: "/team",
    label: "Our Team",
  },
];

const NavigationDefault = () => {
  return (
    <nav className="navbar navbar-dark bg-color-darkgreen fixed-top navbar-expand-lg px-4 shadow">
      <div className="container-fluid">
        <img src={banner} className="navbar-banner" alt="navigation banner" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-dark bg-color-darkgreen py-2 px-5">
            {LINKS.map(({ to, label }) => (
              <li className="nav-item mx-3" key={to}>
                <NavLink
                  to={to}
                  exact
                  activeClassName="active text-color-white text-decoration-underline"
                  className="nav-link text-uppercase text-white"
                  style={{ letterSpacing: "3.3px", textUnderlineOffset: "3px" }}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item mx-3">
              <EventLiveTag />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationDefault;
