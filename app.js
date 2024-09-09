const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Define routes for different sections
app.get('/', (req, res) => {
    res.render('index', { section: 'Home' });
});

app.get('/dashboard', (req, res) => {
    res.render('index', { section: 'Dashboard' });
});

app.get('/Reports', (req, res) => {
    res.render('Reports');
});


app.get('/setting', (req, res) => {
    res.render('setting');
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
