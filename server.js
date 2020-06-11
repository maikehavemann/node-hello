const express = require('express');
const server = express();

server.get("/", function(req, res, err){
  res.send("Hello zCX User!")
})

module.exports = server;
