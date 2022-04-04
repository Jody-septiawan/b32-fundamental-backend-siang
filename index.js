//instantiate express module
const express = require('express');

//use express in app variable
const app = express();

//define the server port
const port = 5000;

//create the homepage route
app.get('/', (req, res) => {
  //res means, response, and it send string "Hello Express!" to the API
  const batch = 32;
  res.send('Hello batch ' + batch);
});

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`));
