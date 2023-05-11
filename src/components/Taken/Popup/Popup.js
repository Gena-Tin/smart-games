import css from "./Popup.module.css";
import winImg from "./win.png";

const Popup = ({ visible, onClick }) => {
  return (
    <div className={css.popupStyle} onClick={onClick}>
      {visible && <img src={winImg} alt="youWin" className={css.imgStyle} />}
    </div>
  );
};

export default Popup;
