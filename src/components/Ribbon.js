import "./Ribbon.css";

const Ribbon = ({ text, className }) => (
  <div className="ribbon-wrapper-green">
    <div className={`ribbon-green ${className}`}>{text}</div>
  </div>
);

export default Ribbon;
