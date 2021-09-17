import logo from "assets/images/treehouse.png";

import "./Footer.css";
import instaIcon from "assets/images/icon_insta.png";
import youtubeIcon from "assets/images/icon_youtube.png";
import webIcon from "assets/images/icon_web.png";

const Footer = () => {
  const contact_url = "mailto:21f1005287@student.onlinedegree.iitm.ac.in";
  return (
    <footer className="footer ">
      <hr className="line" />
      <div className="row">
        <div className="col-6 contact-us-section">
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item bg-transparent border-0 px-0">
              <a
                href="https://www.instagram.com/invictus_iitm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaIcon} alt="instagram icon" />
              </a>
            </li>
            <li className="list-group-item bg-transparent border-0 px-0">
              <a
                href="https://www.youtube.com/channel/UCax6gDzWhjc1177nGU2A_Ew"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="youtube icon" />
              </a>
            </li>
            <li className="list-group-item bg-transparent border-0 px-0">
              <a
                href="https://onlinedegree.iitm.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={webIcon} alt="youtube icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 text-end logo">
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item bg-transparent border-0 px-0">
              <img src={logo} alt="wnk logo" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
