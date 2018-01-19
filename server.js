import express from 'express';
import apiRouter from './api';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: '....'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(8091, () => {
  console.info('Express is listening on port ', 8091);
});