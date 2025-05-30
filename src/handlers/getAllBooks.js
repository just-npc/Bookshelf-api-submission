const books = require('../books.js');

const getAllBooksHandler = (h) => {
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

  response.code(201);
  return response;
};

module.exports = getAllBooksHandler;
