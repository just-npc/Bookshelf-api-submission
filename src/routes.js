const addBookHandler = require('./handlers/createBook');
const getAllBooksHandler = require('./handlers/getAllBooks');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  }
];

module.exports = routes;
