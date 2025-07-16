const express = require('express');
const morgan = require('morgan');
const app = express();
// app.use(morgan('dev'));


app.get('/', (req, res) => {
      res.send('Hello, Express!');
    });



app.get('/greetings', (req, res) => {
    const username = req.query.username;
    res.send(`Hi there, ${username}!`);
});




app.get('/roll/:value', (req, res) => {
    const value = req.params.value;
    if (isNaN(value)) {
        return res.send('You must specify a number!');
    }

    const max = parseInt(value);
    const rolled = Math.floor(Math.random() * (max + 1)); 
    res.send(`You rolled a ${rolled}.`);
});

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:index-parameter', (req, res) => {
    if NaN {
        res.send("This item is not yet in stock. Check back soon!")
    }
})




// // // query parameters
// app.get('/hello', (req, res) => {
//     const name = req.query.name;
//     const age = req.query.age;
//  res.send(`Hello there, ${name}! I hear you are ${age} years old!`);
// });



// //route parameters
// app.get('/:itemNumber', (req, res) => {
//     console.log(req.params.itemNumber);
//     res.send(`<h1>item ${req.params.itemNumber}</h1>`);
// });




app.listen(3000, () => {
    console.log('Listening on port 3000');
});