const express = require('express');
const app = express();
const cors = require('cors');

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());

const AllProductRoutes = require('./routes/product.route');
AllProductRoutes(app);

app.listen(8000, () => console.log('Server up on port 8000.'));