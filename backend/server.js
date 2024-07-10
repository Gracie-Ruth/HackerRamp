const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/wishlists', require('./routes/wishlists'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
