const express = require('express');
const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";
var a = 0;

app.listen(PORT, HOST, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(a.toString());
});

app.get('/checkin',(req, res) => {
  a++;
  res.send("checkin!!!");
});