const addBookHandler = require('./handlers/createBook');
const deleteBookByIdHandler = require('./handlers/deleteBookById');
const editBookByIdHandler = require('./handlers/editBookById');
const getAllBooksHandler = require('./handlers/getAllBooks');
const getBookByIdHandler = require('./handlers/getBookById');

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
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler
  },
  {
    method: 'Delete',
    path: '/books/{id}',
    handler: deleteBookByIdHandler
  }
];

module.exports = routes;
