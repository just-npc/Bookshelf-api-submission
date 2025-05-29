const addBookHandler = require('./handlers/createBook');

const routes =[
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  }
];

module.exports = routes;