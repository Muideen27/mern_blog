const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:tJ8q0dvdXBBTVyiY@blog.mdslktc.mongodb.net/?retryWrites=true&w=majority&appName=blog')

app.post('/register', (req,res) =>{
    const {username, password} = req.body;
    res.json({requestData:{username, password}});
});

app.listen(4000);
