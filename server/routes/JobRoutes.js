const express = require('express');
const router = express.Router();

// Simulated job data
const jobs = [
  { title: 'Software Engineer', company: 'Tech Corp', location: 'New York', description: 'Lorem ipsum...' },
  { title: 'Marketing Manager', company: 'Ad Agency', location: 'Los Angeles', description: 'Lorem ipsum...' },
  // Add more job listings
];

// Define a route to get job listings
router.get('/jobs', (req, res) => {
  res.json(jobs);
});

module.exports = router;