import React, { useState } from 'react';
import "./Converter.css";

const Converter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputLetter, setOutputLetter] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Read the uploaded file to display as image or video
    const reader = new FileReader();
    reader.onload = (event) => {
      setMediaUrl(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    // Assume you have a function or API endpoint to process the file and get the output letter
    // Replace this with actual logic to process the file and get the output
    const output = await processFile(selectedFile);
    setOutputLetter(output);
  };

  const processFile = async (file) => {
    // Mock function to simulate processing the file and getting the output letter
    // In a real application, you would call a machine learning model or API
    return new Promise((resolve) => {
      setTimeout(() => {
        // Example: Assuming 'A' is the output for demonstration purposes
        resolve('A');
      }, 2000); // Simulating a delay for processing
    });
  };

  return (
    <div className="converter-bg">
        <div className="image-upload-page">
        <h1>Image Upload</h1>
        <input type="file" onChange={handleFileChange} />
        {mediaUrl && (
            <div className="media-preview">
            {mediaUrl.endsWith('.mp4') ? (
                <video controls>
                <source src={mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            ) : (
                <img src={mediaUrl} alt="Uploaded Media" />
            )}
            </div>
        )}
        <button onClick={handleUpload}>
            <img src="upload_icon.png" alt="Upload Icon" />
        </button>
        {outputLetter && (
            <div className="output-container">
            <h2>Output Letter:</h2>
            <p>{outputLetter}</p>
            </div>
        )}
        </div>
    </div>
  );
};



export default Converter;
