//Nobody can see this backend node stuff!! :)

const express = require('express')
const app = express()
const port = 3000
//req is the request object (if they sent a form etc...)
//res is the response object we send.
app.get('/', (req, res) => res.send('Hello World!'))
//This is the url: http://cs.creatorof.jsearch.org:3000
app.get('/byu', (req, res) => res.send('Hello BYU!'))
//Url: http://cs.creatorof.jsearch.org:3000/byu
app.get('/byu/cs260', (req, res) =>
{
    res.statusCode = 200;
    console.log("This is javascript from node");
    console.log("This is awesome.");
    res.send("Hello BYU CS 260");
});

app.post('/byu', (req, res) => {
    console.log("In post route....")
   res.send('Hello BYU Post route!!');
  
});
app.use(express.static('Public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))