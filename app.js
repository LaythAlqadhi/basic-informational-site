const express = require('express');
const path = require('path');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'index.html'))
})

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'about.html'))
})

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'project', 'contact-me.html'))
})

app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'project', '404.html'))
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})