import { useNavigate } from "react-router-dom";
import "./PostFooter.scss";

export default function PostFooter() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/published");
  }

  return (
    <footer className="post-footer">
      <div className="post-footer__buttons">
        <button className="post-footer__button">Save draft</button>
        <button
          className="post-footer__button button__publish"
          onClick={handleClick}
        >
          Publish
        </button>
      </div>
      <p className="post-footer__terms">
        By posting your listing, you aree to our{" "}
        <span className="post-footer__underline">Terms of Use</span> and{" "}
        <span className="post-footer__underline">Privacy Policy</span>
      </p>
    </footer>
  );
}
