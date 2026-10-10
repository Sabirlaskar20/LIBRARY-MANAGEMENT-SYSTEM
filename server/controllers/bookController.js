export function getAllBooks(_request, response) {
  response.json({ message: 'Fetched all books (test response)' });
}

export function getBookById(request, response) {
  response.json({ message: `Fetched book with id ${request.params.id}` });
}

export function createBook(request, response) {
  response.status(201).json({ message: 'Book created (test response)', data: request.body });
}

export function updateBook(request, response) {
  response.json({ message: `Updated book with id ${request.params.id}`, data: request.body });
}

export function deleteBook(request, response) {
  response.json({ message: `Deleted book with id ${request.params.id}` });
}