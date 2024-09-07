// const express = require('express');
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
// const path = require('path');
// const adminRoutes = require('./routes/adminRoutes');
// app.use('/admin', adminRoutes);

// const app = express();
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost/quiz-system', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

//   // Serve static files (HTML, CSS, JS)
// app.use(express.static('public'));

// // Routes
// app.use('/api/auth', authRoutes);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const cors = require('cors');
// app.use(cors());

// // // Start the server
// // app.listen(5000, () => {
// //   console.log('Server is running on port 5000');
// // });


// const questionRoutes = require('./routes/questionRoutes');
// app.use('/api/questions', questionRoutes);



const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express(); // Initialize the app

// Middleware
app.use(express.json()); // Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(cors()); // Enable CORS

// Database connection
mongoose.connect('mongodb://localhost/quiz-system', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const questionRoutes = require('./routes/questionRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use('/api/auth', authRoutes); // Authentication routes
app.use('/admin', adminRoutes); // Admin routes
app.use('/api/questions', questionRoutes); // Questions routes
app.use('/student', studentRoutes); //student routes

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


