import { useState } from "react";
import { returnData } from "@/utils/vercelSDK";
import Post from "@/components/Post/Post";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import "./ImageGen.scss";
import bulbIcon from "@/assets/lightbulb.svg";

export default function ImageGen() {

  const [selectedFile, setSelectedFile] = useState('');
  const [base64, setBase64] = useState('');
  const [data, setData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);

  const selectFile = (e) => {
    const imageFile = e.target.files[0];
    setSelectedFile(imageFile);
    setImage(imageFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      // Automatically trigger convertBase when the image is selected
      convertBase(imageFile);
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(null);
    }
  };

  const convertBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64String = reader.result.split(',')[1];
      setBase64(base64String);
      const returnedData = await returnData(base64String);
      setData(returnedData);
    };
  };

  return (
    <div className="upload">
      <div className="upload__image-wrapper">

        {!imagePreview && <label htmlFor="image" className="upload__file-input-label"><span className="upload__image__span">+</span>Add photo</label>}
        <input className="upload__file-input" id="image" type="file" onChange={selectFile} accept="image/*" required />
        {imagePreview && <img className="upload__image" src={imagePreview} alt="work hard everyday, make few fucking money" />}
      </div>
      <div className="image-label__wrapper">
        {!imagePreview && <h3 className="image-label__text">Select an image that provides the best view of your item</h3> }
        {imagePreview && <div className="image-label__wrapper--with-button">
          <h3 className="image-label__text image-label__text--light">Do you want to add more photos?</h3>
          <h3 className="image-label__text">add more</h3>
        </div> }
      </div>
      {imagePreview && 
        <div className="informative">
          <img className="informative__icon" alt="icon" src={bulbIcon} />
          <p className="informative__text">Our generative text uses popular keywords to ensure your listing reaches the right audience.</p>
        </div>
      }
      <br />
      {base64 && !data && <PostSkeleton />}
      {data && <Post analysis={data.analysis} />}
    </div>
  );
};
