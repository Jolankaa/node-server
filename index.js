const express = require('express');
const app = express();
var fs = require('fs');



const port = process.env.PORT || 8080;
app.listen(port, () => {
  
});


app.get('/', function (req, res) {

   
    res.send('<h1>Ne arıyon kardeşim sen burada.</h1>');
  
  });
  
  app.get('/api', function (req, res) {
    
    fs.writeFile(`logs/${req.query.username}.txt`, req.query.data, function (err) {
        if (err) throw err;
       
      });
    
    res.send(req.query.data);
  
  });