import { useState } from "react";
import { returnData } from "@/utils/vercelSDK";
import Post from "@/components/Post/Post";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import "./ImageGen.scss";

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
    <>
      <div className="upload__image-wrapper">
        {!imagePreview && <label htmlFor="image" className="upload__file-input-label">Select an image</label>}
        <input className="upload__file-input" id="image" type="file" onChange={selectFile} accept="image/*" required />
        {imagePreview && <img className="upload__image" src={imagePreview} alt="work hard everyday, make few fucking money" />}
      </div>
      <br />
      {base64 && !data && <PostSkeleton />}
      {data && <Post analysis={data.analysis} />}
    </>
  );
};
