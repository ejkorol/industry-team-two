import "./Post.scss";
import { useEffect, useState } from "react";
import ImageGen from "@/components/ImageGen/ImageGen";
import SingleTag from "../SingleTag/SingleTag";
import PostHeader from "@/components/PostHeader/PostHeader.jsx";

export default function Post() {
  const [title, setTitle] = useState("Title");
  const [Category, setCategory] = useState("Category");
  const [Description, setDescription] = useState("Description");
  const [tags, setTags] = useState(["bike", "electronics"]);
  const [data, setData] = useState(null);

  useEffect(() => {}, [tags]);
  return (
    <>
      <PostHeader />
      <form className="post">
        <ImageGen />
        <input className="post__input" type="text" placeholder="Title"></input>
        <input
          className="post__input"
          type="text"
          placeholder="Category"
        ></input>
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
            Increase your ad exposure. Enter up to 5 keywords buyers could
            search to find your ad.
          </p>
          <input className="post__input" placeholder="Tags(Optional)"></input>
          <p className="post__tags--small">
            Enter a keyword and press enter or next
          </p>
          <div className="tags">
            {tags.map((tag, index) => {
              return <SingleTag key={index} tag={tag} index={index} />;
            })}
          </div>
        </div>
      </form>
    </>
  );
}
