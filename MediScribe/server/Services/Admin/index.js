const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('./src/config/Config');
const AdminRoutes = require('./src/routes/AdminRoutes')
const path = require('path');
const app = express();

const DbConnect = require('./src/config/DatabaseConnection')
DbConnect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware
app.use(helmet());

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
// app.use('/home/subhash/Documents/MediScribe/Data', express.static(path.join(__dirname, './Data')));


// Routes
app.use('/api/admin', AdminRoutes);

// Start server
const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});