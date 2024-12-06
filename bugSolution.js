const express = require('express');
const app = express();

// This line is crucial for parsing JSON request bodies
app.use(express.json());

app.post('/users', (req, res) => {
  const user = req.body;
  console.log(user); // User data should now be accessible here.
  // ... process the user data ...
  res.status(201).send();
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});