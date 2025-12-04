
const express = require('express');
const passport = require('passport');
const { createClient } = require('@supabase/supabase-js');
const app = express();
const port = 8000;

// Supabase setup
const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Sample login route
app.post('/auth/login', (req, res) => {
  // Handle login logic here
  res.send({ message: 'Login successful' });
});

// Get courses
app.get('/courses', async (req, res) => {
  const { data, error } = await supabase
    .from('courses')
    .select('*');
  if (error) return res.status(400).send(error);
  res.json(data);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
