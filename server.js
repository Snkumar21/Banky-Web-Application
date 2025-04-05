const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const SECRET_KEY = 'your_jwt_secret_key';

// Connect to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Snkumar30',
    database: 'banky_users'
});

db.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
        process.exit(1);
    } else {
        console.log('Connected to MySQL');
    }
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Signup API
app.post('/signup', async (req, res) => {
    console.log('Signup request body:', req.body);
    const { username, password, phone } = req.body;

    // Check if user already exists
    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        if (results.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        } else {
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert new user
            db.query('INSERT INTO users (username, password, phone) VALUES (?, ?, ?)', 
                [username, hashedPassword, phone], (err, result) => {
                if (err) {
                    console.error('Database insert error:', err);  // Log MySQL error
                    return res.status(500).json({ message: 'Database error' });
                }
                return res.status(201).json({ message: 'User registered successfully' });
            });
        }
    });
});

// Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Login request body:', req.body);

    // Check if user exists
    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error' });  // Handle DB error
        if (results.length == 0) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const user = results[0];

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Create JWT token
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ message: 'Login successful', token });
    });
});

// Get Account Info API (for logged-in users)
app.get('/account', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ message: 'Unauthorized access' });

    // Verify token
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });

        // Get user info
        const userId = decoded.id;
        db.query('SELECT username, phone, created_at FROM users WHERE id = ?', [userId], (err, results) => {
            if (err) return res.status(500).json({ message: 'Database error' });  // Handle DB error
            return res.json(results[0]);
        });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
