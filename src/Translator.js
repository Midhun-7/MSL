import React, { useState } from 'react';
import './Translator.css'; // Import your CSS file for this component

// Job Search Component
const JobSearch = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="job-search-card">
      <h2>Job Search</h2>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Enter job title" />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

// Job Posting Component
const JobPosting = ({ handlePost }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handlePostClick = () => {
    handlePost(jobTitle, jobDescription);
    setJobTitle('');
    setJobDescription('');
  };

  return (
    <div className="job-post-card">
      <h2>Post Job</h2>
      <input type="text" value={jobTitle} onChange={handleTitleChange} placeholder="Job Title" />
      <textarea value={jobDescription} onChange={handleDescriptionChange} placeholder="Job Description"></textarea>
      <button onClick={handlePostClick}>Post</button>
    </div>
  );
};

// Job Listing Component
const JobListing = ({ jobs }) => {
  return (
    <div className="job-list-grid">
      {jobs.map((job) => (
        <div className="job-listing-card" key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

// Translator Page Component
const Translator = () => {
  const [jobs, setJobs] = useState([]);

  const handleSearch = (searchTerm) => {
    // Example: Fetch jobs based on search term from API
    // Replace this with your actual logic for fetching jobs
    const searchResults = [
      { id: 1, title: 'Translator Job 1', description: 'Description for Translator Job 1' },
      { id: 2, title: 'Translator Job 2', description: 'Description for Translator Job 2' },
      // Add more job objects as needed
    ];
    setJobs(searchResults);
  };

  const handlePost = (title, description) => {
    // Example: Post job details to API
    // Replace this with your actual logic for posting jobs
    const newJob = { id: jobs.length + 1, title, description };
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="translator-page-container">
      <h1>Translator Page </h1>
      <div className="grid-container">
        <JobSearch handleSearch={handleSearch} />
        <JobPosting handlePost={handlePost} />
        <JobListing jobs={jobs} />
      </div>
    </div>
  );
};

export default Translator;
