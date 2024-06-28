import "./Post.scss";
import { useEffect, useState } from "react";
import SingleTag from "../SingleTag/SingleTag";

export default function Post({ analysis: { title, description, tags, pricePoint, categories } }) {
  const [postTitle, setPostTitle] = useState("Title");
  const [postCategory, setPostCategory] = useState([
    "clothing", "computers", "fashion", "art"
  ]);
  const [postDescription, setPostDescription] = useState("Description");
  const [postTags, setPostTags] = useState(null);
  const [postPrice, setPostPrice] = useState("Price (optional)")

  useEffect(() => {
    setPostTitle(title);
    setPostDescription(description);
    setPostPrice(pricePoint);
    if (tags) {
      const tagArray = tags.split(",")
      setPostTags(tagArray);
    }
    if (categories) {
      const categoryArray = tags.split(",")
      setPostCategory(categoryArray);
    }
  }, []);

  return (
    <form className="post">
      <input
        className="post__input"
        type="text"
        value={postTitle}
        onChange={(e) => { setPostTitle(e.target.value) }}
      ></input>
      <select placeholder="Category" className="post__input">
        {postCategory.map((post, i) => {
          return <option key={i}>{post}</option>
        })}
      </select>
      <input className="post__input" value={postPrice} onChange={(e) => { setPostPrice(e.target.value) }} />
      <textarea
        className="post__input post__input--description"
        value={postDescription}
        onChange={(e) => { setPostDescription(e.target.value) }}
      ></textarea>
      <div className="post__tags">
        <h2 className="post__tags--header">Tags</h2>
        <p className="post__tags--body">
          Increase your ad exposure. Enter up to 5 keywords buyers could search
          to find your ad.
        </p>
        <input className="post__input post__input--tags" placeholder="Tags(Optional)"></input>
        <div className="tags">
          {postTags && postTags.map((tag, index) =>
            <SingleTag key={index} tag={tag} index={index}/>
          )}
        </div>
      </div>
    </form>
  );
}
