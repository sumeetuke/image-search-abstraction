const express = require('express');
const app =express();
const bodyParesr = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Bing = require('node-bing-api')({accKey:'db63791f74064c3ca3a65570902162f5'});
const searchTerms = require('./searchTerms')

app.use(bodyParesr.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/searchTerms')
app.get('/api/imagesearch/:searchVal*',(req, res, next)=>{
var { searchVal } = req.params;
var { offset } = req.require;
var date = new searchTerms({
  searchVal,
  searchDate: new Date()
});

data.save(err => {
  if (err){
    res.send('Error seving to the database');
  }
  res.json({works: works});
});

return res.json({

searchVal,
offset

});
});



app.listen(process.env.PORT || 3000,()=>{
console.log('surver is running')
});
