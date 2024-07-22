
import "../styles/dropdown.css";
import arrow from "../assets/img/arrow.svg";
import { useState } from "react";

const DropDown = ({ title, content, customClassName}) => {

  const [isOpen, setIsOpen] = useState(false);
  
  
  const onToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="dropdown" aria-label={title}>
      <div
        className={`dropdown-bar bar`}
        onClick={onToggle}
        role="button"
        aria-expanded={isOpen}
      >
        <h2 className={`title ${customClassName}`}>{title}</h2>
        <img
          src={arrow}
          alt="Flèche"
          className={isOpen ? "arrow-active" : "arrow"}
        />
      </div>
      {isOpen && (
        <p
          className={`description ${isOpen ? "active" : "none"}`}
          aria-hidden={!isOpen}
        >
          {content}
        </p>
      )}
    </div>
  );
};

DropDown.defaultProps = {
  customClassName: "",
};

export default DropDown;