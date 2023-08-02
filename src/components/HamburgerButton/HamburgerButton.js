import "./HamburgerButton.css";

function HamburgerButton({ onClick }) {
  return (
    <button type='button' className="hamburger-button" onClick={onClick}></button>
  );
}

export default HamburgerButton;
