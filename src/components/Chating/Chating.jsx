import chevy from "../../assets/leftChevron.svg";
import porche from "@/assets/porche.png";
import Day from "@/components/Day/Day.jsx";
import camera from "@/assets/camera.svg";
import Button from "@/components/Button/Button";
import '@/components/Chating/Chating.scss'
export default function Chating() {
  return (
    <div className="chat">
      <div className="chat__contact">
        <img src={chevy} alt="back arrow" className="chat__chevron" />
        <h1 className="chat__name">Ognjen Dimitrijevic</h1>
      </div>
      <div className="chat__item">
        <img src={porche} alt="porche" className="chat__img" />
        <div className="chat__description">
          <p className="chat__text">Please Contact</p>
          <p className="chat__text">Selling: 2024 Porche</p>
          <p className="chat__subtext">Toronto, ON N4Y</p>
        </div>
      </div>
      <Day />
      <p className="chat__mini">Fri, Jun 28</p>
      <div className="chat__msg-container">
        <p className="chat__msg">WOW! I love this car!</p>
        <p className="chat__mini">15 minutes</p>
      </div>
      <div className="chat__send-container">
        <img src={camera} alt="upload" />
        <Button />
      </div>
    </div>
  );
}
