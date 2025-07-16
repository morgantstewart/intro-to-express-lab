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
    if (NaN) {
        return("This item is not yet in stock. Check back soon!")}
    } else {
        res.send(`So, you want the ${name}? For ${price}, it can be yours...`)
    });



  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];





app.listen(3000, () => {
    console.log('Listening on port 3000');
});

//need to finish this! ^^