const AuthorController = require('../controllers/author.controller');

module.exports = app => {
  app.get('/api/author', AuthorController.findAllAuthor);
  app.get('/api/author/:id', AuthorController.findOneAuthor);
  app.post('/api/author', AuthorController.createAuthor);
  app.put('/api/author/:id', AuthorController.updateAuthor);
  app.delete('/api/author/:id', AuthorController.deleteAuthor);
}