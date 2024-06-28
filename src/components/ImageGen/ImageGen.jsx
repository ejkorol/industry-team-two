import { useState, useEffect } from "react";
import { returnData } from "@/utils/vercelSDK";

export default function ImageGen() {

  const [ selectedFile, setSelectedFile ] = useState('');
  const [ base64, setBase64 ] = useState('');
  const [ data, setData ] = useState(null);

  const selectFile = (e) => {
    setSelectedFile(e.target.files[0])
  };

  const convertBase = () => {
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = async () => {
      const base64String = reader.result.split(',')[1];
      setBase64(base64String);
      const returnedData = await returnData(base64String);
      setData(returnedData);
      console.log(returnedData);
    }
  }

  return (
    <>
      <h1>Image Generation</h1>
      <input type='file' id='image' name='upload image' onChange={selectFile} />
      <button onClick={() => { convertBase() }}>convert</button>
      {data && <>
        <h1>{data.analysis.title}</h1>
        <p>{data.analysis.description}</p>
        <p>{data.analysis.tags}</p>
      </>}
    </>
  );
};
