import ex from "@/assets/ex.svg";
import "@/components/PostHeader/PostHeader.scss";
import greg from "@/assets/greg2.jpg";

export default function PostHeader() {
  return (
    <div className="poster">
      <div className="poster__top-container">
        <img src={ex} alt="close button" className="poster__chevron" />
        <h1 className="poster__title">Post</h1>
      </div>
      <div className="poster__greg">
        <img className="poster__image" src={greg} />
        <div className="poster__texts">
          <p className="poster__name">Carlos</p>
          <p className="poster__text">Posting in Buy & Sell</p>
        </div>
      </div>
    </div>
  );
}
