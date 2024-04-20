import React, { useState } from 'react';
import './Dictionary.css'; // Import your CSS file for this component

const Dictionary = () => {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');

  const handleLetterChange = (e) => {
    const selectedValue = e.target.value.toLowerCase(); // Convert input to lowercase
    setSelectedLetter(selectedValue);

    // Example: Assuming you have media URLs mapped for each letter
    const mediaMap = {
      a: 'url_to_image_a.jpg',
      b: 'url_to_image_b.jpg',
      // Add more mappings for other letters
    };

    // Set the media source based on the selected letter
    setMediaUrl(mediaMap[selectedValue] || ''); // If letter not found, set empty string
  };

  return (
    <div className="dictionary-container">
      <h1>Dictionary</h1>
      <div className="grid-container">
        <div className="dropdown-card">
          <div className="dropdown-container">
            <label htmlFor="letterDropdown">Select a letter:</label>
            <select id="letterDropdown" value={selectedLetter} onChange={handleLetterChange}>
              <option value="">Select</option>
              <option value="a">A</option>
              <option value="b">B</option>
              {/* Add more options for other letters */}
            </select>
          </div>
        </div>
        {mediaUrl && (
          <div className="media-card">
            {/* Display image or video based on media URL */}
            {mediaUrl.endsWith('.mp4') ? (
              <video controls>
                <source src={mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={mediaUrl} alt={`Media for letter ${selectedLetter.toUpperCase()}`} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
