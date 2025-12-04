// server.js
const express = require('express');
const cors = require('cors');  // 引入 CORS
const supabase = require('./supabaseClient');  // 引入 Supabase 客户端

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());  // 允许接收 JSON 格式的请求体

// GET 请求：查询所有课程
app.get('/courses', async (req, res) => {
  const { data, error } = await supabase.from('courses').select('*');
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json(data);  // 返回查询到的课程数据
});

// POST 请求：插入新课程
app.post('/courses', async (req, res) => {
  const { name, code, start_time, end_time, semester_id } = req.body;
  const { data, error } = await supabase
    .from('courses')
    .insert([{ name, code, start_time, end_time, semester_id }]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json(data);  // 返回插入后的课程数据
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
