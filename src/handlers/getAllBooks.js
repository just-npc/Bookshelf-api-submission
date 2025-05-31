const books = require('../books.js');

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  let result = books;

  if (name) {
    const searchName = name.toLowerCase();

    result = result.filter((book) => book.name.toLowerCase().includes(searchName));
  }

  if (reading === '0') {
    result = result.filter((book) => book.reading === false);
  } else if (reading === '1') {
    result = result.filter((book) => book.reading === true);
  }

  if (finished === '0') {
    result = result.filter((book) => book.finished === false);
  } else if (finished === '1') {
    result = result.filter((book) => book.finished === true);
  }

  const response = h.response({
    status: 'success',
    data: {
      books: result.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      }))
    }
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
