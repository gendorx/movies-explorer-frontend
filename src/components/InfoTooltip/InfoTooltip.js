import "./InfoTooltip.css";

import successLogo from "../../images/icon-success.svg";
import failLogo from "../../images/icon-fail.svg";

import usePressEscape from "../../hooks/usePressEcsape";

function InfoTooltip({ isSuccess, text, isOpen, onClose = () => {} }) {
  usePressEscape(isOpen, onClose)

  return (
    <div className={`tooltip ${isOpen && "tooltip_opened"}`}>
      <div className="tooltip__container">
        <button className="tooltip__close" onClick={onClose}></button>

        <img
          src={isSuccess ? successLogo : failLogo}
          className="tooltip__image"
          alt={isSuccess ? "картинка успеха" : "картинка провала"}
        />

        <p className="tooltip__message">{text}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
