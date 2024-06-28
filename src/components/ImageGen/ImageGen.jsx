import { useState } from "react";
import { returnData } from "@/utils/vercelSDK";
import Post from "@/components/Post/Post";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import "./ImageGen.scss";

export default function ImageGen() {

  const [ selectedFile, setSelectedFile ] = useState('');
  const [ base64, setBase64 ] = useState('');
  const [ data, setData ] = useState(null);
  const [ imagePreview, setImagePreview ] = useState(null);
  const [ image, setImage ] = useState(null);

  const selectFile = (e) => {
    setSelectedFile(e.target.files[0])
    const imageFile = e.target.files[0];
    setImage(imageFile)
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(null);
    };
  };

  function convertBase() {
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = async () => {
      const base64String = reader.result.split(',')[1];
      setBase64(base64String);
      const returnedData = await returnData(base64String);
      setData(returnedData);
    }
  }

  return (
    <>
      <div className="upload__image-wrapper">
        { !imagePreview && <label htmlFor="image" className="upload__file-input-label">select an image</label> }
        <input className="upload__file-input" id="image" type="file" onChange={selectFile} accept="image/*" required />
        { imagePreview && <img className="upload__image" src={imagePreview} alt="work hard everyday, make few fucking money" /> }
      </div>
      <br/>
      <button className="upload__image-button" onClick={() => { convertBase() }}>convert</button>
      {base64 && !data && <PostSkeleton />}
      {data && <Post analysis={data.analysis} />}
    </>
  );
};
