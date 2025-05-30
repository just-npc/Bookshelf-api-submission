const books = require('../books.js');

const getAllBooksHandler = (request, h) => {
  const response = h.response({
    status: 'success',
    data: {
      books: books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
      }))
    }
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
