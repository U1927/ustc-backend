// supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

// 获取环境变量中的 Supabase URL 和 API 密钥
const supabaseUrl = process.env.SUPABASE_URL;  // 你将要在 Koyeb 配置的环境变量
const supabaseKey = process.env.SUPABASE_KEY;  // 你将要在 Koyeb 配置的环境变量

// 初始化 Supabase 客户端
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
