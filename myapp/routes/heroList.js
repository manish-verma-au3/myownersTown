var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/myhero', function(req, res) {

  var superHeroList = ['SUPERMAN','THOR','ROBIN','IRONMAN','GHOSTRIDER','CAPTAINAMERICA','FLASH',
                      'WOLVERINE','BATMAN','HULK','BLADE','PHANTOM','SPIDERMAN','BLACKWIDOW',
                      'HELLBOY','PUNISHER'];

  var myarr = req.body.input
  console.log("counter", myarr )
  
  const output = myarr.reduce((acc, cu) => { 
    let ret = [];
      acc.map(obj => {
        cu.map(obj_1 => {
          ret.push(obj + obj_1) 
        });
      });
      return ret;
   })

   var finalValue = superHeroList.filter(value => {
     return output.includes(value)
   });

res.send(finalValue[0])
  
});

module.exports = router;
