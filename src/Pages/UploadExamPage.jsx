import React, { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

const UploadExamPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    setUploading(true);
    setUploadError(null);

    // Simulate upload process (just for demo purposes)
    setTimeout(() => {
      const updatedFiles = uploadedFiles.map((file) => ({
        file,
        status: "Uploaded successfully",
      }));
      setUploadedFiles(updatedFiles);
      setUploading(false);
    }, 2000); // simulate 2-second upload process
  };

  return (
    <div className="upload-exam-container">
      <h2>Upload Exam</h2>
      <p>Instructions: Ensure the exam photos are clear and readable.</p>
      <form onSubmit={handleUpload}>
        <div className="form-group">
          <label>Upload Exam Images</label>
          <input
            type="file"
            name="examImages"
            multiple
            required
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
        {uploadError && <div style={{ color: "red" }}>{uploadError}</div>}
      </form>
      <div className="uploaded-files">
        <h3>Uploaded Files</h3>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>
              <FaFileUpload /> {file.name} {file.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UploadExamPage;
