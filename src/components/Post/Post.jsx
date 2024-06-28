import "./Post.scss";
import { useState } from "react";

export default function Post() {
  const [title, setTitle] = useState("Title");
  const [Category, setCategory] = useState("Category");
  const [Description, setDescription] = useState("Description");
  const [tags, setTags] = useState(["bike", "electronics"]);
  return (
    <form className="post">
      <div className="post-profile">
        <img className="post-profile__image"></img>
        <div className="post-profile__texts">
          <p className="post-profile__text">Name</p>
          <p className="post-profile__text">Posting in Buy & Sell</p>
        </div>
      </div>
      <div className="post-add-photo">
        <p>+</p>
        <p className="post-add-photo__text">Add photo</p>
      </div>
      <input className="post__input" type="text" placeholder="Title"></input>
      <input className="post__input" type="text" placeholder="Category"></input>
      <input
        className="post__input"
        type="text"
        placeholder="Price(Optional)"
      ></input>
      <input
        className="post__input post__input--description"
        type="text"
        placeholder="Description"
      ></input>
      <div className="post__tags">
        <h2 className="post__tags--header">Tags</h2>
        <p className="post__tags--body">
          Increase your ad exposure. Enter up to 5 keywords buyers could search
          to find your ad.
        </p>
        <input className="post__input" placeholder="Tags(Optional)"></input>
        <p className="post__tags--small">
          Enter a keyword and press enter or next
        </p>
        <div className="tags">
          {tags.map((tag) => {
            return (
              <div class="tag">
                <p className="tag__text">{tag}</p>
                <button className="tag__remove">X</button>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}
