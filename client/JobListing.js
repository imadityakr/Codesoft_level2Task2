import React, { useState, useEffect } from 'react';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch job listings from the server
  useEffect(() => {
    // Simulated data for demonstration
    const sampleJobs = [
      { title: 'Software Engineer', company: 'Tech Corp', location: 'New York', description: 'Lorem ipsum...' },
      { title: 'Marketing Manager', company: 'Ad Agency', location: 'Los Angeles', description: 'Lorem ipsum...' },
      // Add more job listings
    ];

    setJobs(sampleJobs);
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobListings;

