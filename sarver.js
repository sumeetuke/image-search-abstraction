const express = require('express');
const app =express();
const bodyParesr = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Bing = require('node-bing-api')({accKey:'db63791f74064c3ca3a65570902162f5'});


app.use(bodyParesr.json());
app.use(cors());

app.get('/api/imagesearch/:searchVal*',(req, res, next)=>{
var {searchVal} = req.params;
var {offset} = req.require;

res.json({

  searchVal,
  offset

});
});



app.listen(process.env.PORT || 3000,()=>{
console.log('surver is running')
});
