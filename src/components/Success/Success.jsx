import "./Success.scss";
import tubeMan from "../../assets/tube-man.png";

export default function Success() {
  return (
    <div className="success">
      <img className="success__tube-man" src={tubeMan}></img>
      <div className="success-body">
        <h2 className="success-body__header">Success!</h2>
        <p className="success-body__text">
          Your listing will be live once reviewed.
        </p>
        <button className="success-body__button">Promote your listing</button>
        <p className="success-body__link">View your listings</p>
      </div>
    </div>
  );
}
