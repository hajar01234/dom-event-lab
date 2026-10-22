const express = require('express')

const app = express();
app.use(express.static('public'));

app.get('/test',(req, res)=>{
      res.send('<p>Success!</p>');

})

app.listen(3000, () => {
    console.log('App is Running')
})


app.get('/',(req, res)=>{
    //res.send('<h1>Welcome to my application Hajar</h1>')
    res.sendFile(__dirname + '/views/index.html')

})

app.get('/about', (request, response) => {
    //response.send('<h1> About me page! </h`>')
    response.sendFile(__dirname + '/views/about.html')

})
