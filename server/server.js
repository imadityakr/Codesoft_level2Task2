const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/api', require('./routes/jobRoutes'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
