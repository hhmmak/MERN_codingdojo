const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pd-manager', {
  useNewURLParser: true,
  useUnifiedTopology: true
})
  .then ( () => console.log('Established connection with database'))
  .catch( (err) => console.log('Something went wrong.', err) );
