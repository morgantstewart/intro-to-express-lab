const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));


const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];





app.get('/', (req, res) => {
    res.send('Hello, Express!');
});



app.get('/greetings', (req, res) => {
    const username = req.params.username;
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
    if ('shiny ball', 'autographed picture of a dog', 'vintage 1970s yogurt SOLD AS-IS' === NaN) {
        return ("This item is not yet in stock. Check back soon!")
    } else {
        res.send(`So, you want the ${name}? For ${price}, it can be yours...`)}
});



// Exercise 4


//don't make shoes a param
//use parseint to compare
//get queries set up
//write an if statement
//if min price camel case then do this
//else if not defined max price else if type banana etc
//(filters inside those) const filter shoe =
//res.send to send back as shoes

app.get('/shoes', (req, res) => {
  const type = req.query.type
  if (type) {
    const filteredShoe = shoes.filter(shoe => shoe.type === type)
    console.log(filteredShoe)
    res.send(filteredShoe)
  } else if {
    // min price max price filter based off if something is >= min price etc vice versa, change things into numbers to evaluate their price compared to something else
  }
  console.log(req.params.shoes.min-price);  

});



app.get('/shoes/max-price', (req, res) => {
  // Accessing the parameter
  console.log(req.params.shoes.max-price);  // Output could be 123, 456, etc.

  // Sending a response with the parameter
  res.send(`<h1>Item ${req.params.shoes.max-price}</h1>`);
});

app.get('/:shoes/type', (req, res) => {
  // Accessing the parameter
  console.log(req.params.shoes.type);  // Output could be 123, 456, etc.

  // Sending a response with the parameter
  res.send(`<h1>Type ${req.params.shoes.type}</h1>`);
});



// end

app.listen(3000, () => {
    console.log('Listening on port 3000');
});