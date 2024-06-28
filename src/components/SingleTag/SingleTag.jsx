import "./SingleTag.scss";

export default function SingleTag({tag, index, removeTag}) {
  return (
    <div className="tag">
      <p className="tag__text">{tag}</p>
      <button className="tag__remove">
        X
      </button>
    </div>
  );
}
