'use strict';

const mongoose = require('mongoose');
const express = require('express');

// 1. Create main express instance
const app = express();

// 2. Require routes
const { router: bookRoutes } = require('./routes/books/bookRoutes');

// 3. Require constants
const { URL, PORT } = require('./utils/constants');

// 4. Ensure that the router is using body parser to appropriately format incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 5. Utilise routes
app.use('/api/books', bookRoutes);

// 6. Start server
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log(`Connected to database at ${URL}`);
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  })
