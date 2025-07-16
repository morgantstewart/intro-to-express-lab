const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));


app.get('/greetings/usernameParameter', (req, res) => {
    const username = req.query.username-parameter;
    res.send('Hi there, ${username-parameter}!');
})







// // query parameters
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