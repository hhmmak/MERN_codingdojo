const ProductController = require('../controllers/product.controller');

module.exports = app => {
  app.get('/api/product', ProductController.findAllProduct);
  app.get('/api/product/:id', ProductController.findOneProduct);
  app.post('/api/product', ProductController.createProduct);
  app.put('/api/:id', ProductController.updateProduct);
  app.delete('/api/:id', ProductController.deleteProduct);
}