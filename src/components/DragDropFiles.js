import { useState, useRef,useEffect } from "react";

import React from 'react';
import UploadService from "../services/FileUploadService";
import Bar from '../components/bar';
import ProgressBar from 'react-bootstrap/ProgressBar';


const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const [onPress, setonPress] = useState(true);
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [fileInfos, setFileInfos] = useState([]);
  
  //equals to componentDidmount in class
  useEffect(()=>{
    UploadService.getFiles().then((response)=>{
      setFileInfos(response.data);
    })
  },[]);



  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  

const handleUpload = () => {
    
    const formData = new FormData();
    formData.append("Files", files);
    setonPress(false)
    console.log(files,onPress);
    
    // return () => {<Bar now={countOfProgess} />}
    // setonPress(return(    <div style={{ display: 'block',
    // width: 700, padding: 30 }} onClick = {() =>{console.log('press')}}>
    //  <h4>React-Bootstrap ProgressBar Component</h4>
    //  Current Progress is: {parseInt(countOfProgess)} %
    //  <ProgressBar now={countOfProgess} />
    //  </div>))
    // <div style={{ display: 'block',
    // width: 700, padding: 30 }}>
    //   <Bar now={countOfProgess} />
    //   </div>
    // < ProgressBar />
    //  console.log(formData)
 

  };
//progress bar
  const [countOfProgess, setCountOfProgess] = React.useState(0);
 
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountOfProgess((oldProgress) => {
        if (100 == oldProgress) return 0;
        return Math.min(oldProgress + Math.random() * 10, 100);
      });
    }, );
 
    return () => {
      clearInterval(timer);
    };
  }, []);

  // const upload = () => {
  //   let currentFile = selectedFiles[0];

  //   setProgress(0);
  //   setCurrentFile(currentFile);

  //   UploadService.upload(currentFile, (event) => {
  //     setProgress(Math.round((100 * event.loaded) / event.total));
  //   })
  //     .then((response) => {
  //       setMessage(response.data.message);
  //       return UploadService.getFiles();
  //     })
  //     .then((files) => {
  //       setFileInfos(files.data);
  //     })
  //     .catch(() => {
  //       setProgress(0);
  //       setMessage("Could not upload the file!");
  //       setCurrentFile(undefined);
  //     });

  //   setSelectedFiles(undefined);
  // };


  if (files ) return (
    
    <div className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <button onClick={() => setFiles(null) & setonPress(true)}>Cancel</button>
            {onPress &&<button onClick={handleUpload}>Upload</button>}
            {!onPress &&  <Bar now={countOfProgess} />}
        </div>
    </div>
  )
//   if (files && onPress ) return (
//     <div style={{ display: 'block',
//     width: 700, padding: 30 }}>   
//       <Bar now={countOfProgess} />
//       </div> 
// )

  return (
    <>
        <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to Upload</h1>
         
          <h1>Or</h1>
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
    </>
  );
};

export default DragDropFiles;
