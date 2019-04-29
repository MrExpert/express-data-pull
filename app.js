const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

// add your code here

var data = [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];


app.get('/', (req, res) => {
    res.status(200).send('ok');
});

app.get('/api/TodoItems', (req, res) => {
    res.status(200).send(data);
});

app.get('/api/TodoItems/:number', (req, res) => {
  var num = req.params.number ;
  console.log(num); // outputs number as expected, but doesn't pass into "result"
  // if i assign it a number "1", it works
  //   num = 1 ; 
 var result = data.find(data => {data.todoItemId === num});
    res.status(200).send(result);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
