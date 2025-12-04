// server.js
const express = require('express');
const supabase = require('./supabaseClient');  // 引入 Supabase 客户端

const app = express();
const port = 8000;

// 设置为 JSON 格式的请求体
app.use(express.json());

// 获取所有课程
app.get('/courses', async (req, res) => {
  const { data, error } = await supabase.from('courses').select('*');
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.json(data);  // 返回查询到的课程数据
});

// 添加课程
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

// 启动服务
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
