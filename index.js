const express = require('express');
// const webpack = require('webpack');
const path = require('path');
const app = express()

app.get('/welcome', (req, res) => {
    res.send('Hello World!')
    console.log("wellcome our api");
})


console.log("hiiuuui");

app.listen(3000, (req, res) => console.log('server port running 3000'))

