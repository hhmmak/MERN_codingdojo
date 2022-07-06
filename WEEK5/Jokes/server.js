const express = require("express");
const app = express();
    
require("./config/mongoose.config");
    
app.use(express.json(), // res.body => {}
  express.urlencoded({ extended: true }));
    
// connect to routes
const AllJokesRoutes = require("./routes/jokes.routes");
AllJokesRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));