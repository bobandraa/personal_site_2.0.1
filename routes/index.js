var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/*create default SMTP transport*/

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bobandraMailer@gmail.com',
        pass: 'klasslkkk'
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*POST email body*/
router.post('/email', function(req, res, next){
    var from = req.body.email;
    transporter.sendMail({
      from: from,
      to: 'sandra.cohen.ux@gmail.com',
      subject:  from + " would like to contact you!",
      text: req.body.message
  }, function (err, body) {
    console.log(err);
    res.redirect("/");
  });
}); 

module.exports = router;
