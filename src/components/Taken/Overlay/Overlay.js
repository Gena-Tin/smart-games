import css from "./Overlay.module.css";
const Overlay = ({ visible, onClick }) => {
  const overlayStyle = {
    visibility: visible ? "visible" : "hidden",
  };

  return (
    <div
      className={css.overlayStyle}
      style={overlayStyle}
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
