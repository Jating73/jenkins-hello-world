const express = require('express');
const app = express();
const PORT = 4545 || process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Welcome to Jenkins Hello World App');
});

app.get('/hello',(req,res)=>{
    const name = req.query.name;
    res.send(`Hello ${name}. Welcome to my Jenkins Hello World App`);
});

app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`);
});