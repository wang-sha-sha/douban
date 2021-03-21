let Mock = require("mockjs");
// 创建电影的模拟请求
Mock.mock("/data/list/xiaoming/xiaohong", "get", require("./data/moviedata.json"));
// 创建主页的模拟请求
Mock.mock("/data/list/xiaominghome", "get", require("./data/home.json"));
// 创建广播的模拟请求
Mock.mock("/data/list/xiaomingradio", "get", require("./data/radio.json"));
// 创建广播的模拟请求
Mock.mock("/data/list/xiaomingteam", "get", require("./data/team.json"));
// 创建电影评论的模拟请求
Mock.mock("/data/list/xiaomingall", "get", require("./data/movieComment.json"));