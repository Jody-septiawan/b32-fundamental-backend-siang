const express = require('express');

const app = express();
const port = 5000;

//allow this app to receive incoming json request
//Create app.use for express.json here
app.use(express.json());

let todos = [
  {
    id: 1,
    title: 'Cuci tangan',
    isDone: true,
  },
  {
    id: 2,
    title: 'Jaga jarak',
    isDone: false,
  },
];

//GET list route: simply send arr of obj todos on your user screen
// Create method GET here
app.get('/todos', (req, res) => {
  res.send({
    data: todos,
  });
});

//GET detail route: send the todo obj, by received id request params
// Create method GET by received id here
app.get('/todo/:id', (req, res) => {
  const id = req.params.id;
  const data = todos.find((item) => item.id == id);

  if (!data) {
    return res.send({
      error: {
        message: `Todo with ID: ${id} Not Found!`,
      },
    });
  }

  res.send(data);
});

//POST route: receive json body request, from user input, then push to todos array
// Create method POST here
app.post('/todo', (req, res) => {
  const data = req.body;
  todos.push(data);
  res.send({
    message: 'Insert Todo Data finished',
    data,
  });
});

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
// Create method PATCH here
app.patch('/todo/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;

  todos = todos.map((todo) => {
    if (todo.id == id) {
      return data;
    } else {
      return todo;
    }
  });

  res.send({
    message: 'Update Todo Data finished',
    data,
  });
});

//DELETE route: delete the todo obj, by received id request params
// Create method DELETE here
app.delete('/todo/:id', (req, res) => {
  const id = req.params.id;

  todos = todos.filter((todo) => todo.id != id);

  res.send({
    message: `Delete Todo Data with ID: ${id} finished`,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
