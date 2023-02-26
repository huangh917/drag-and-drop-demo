import http from "../http-common";
// import axios from "axios";

//upload(file): POST form data with a callback for tracking upload progress
//getFiles(): GET list of Files’ information

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;
