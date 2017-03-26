var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var BLOG_CATEGORIES = ['technical', 'cultural'];

/*create default SMTP transport*/
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'bobandra' });
});

/* GET blog pages. */
router.get('/blog-posts', function(req, res) {
  res.render('blog-posts/blogs', { title: 'Blog posts', layout: 'layouts/blog' });
});

router.get('/blog-posts/:category/:id', function(req, res) {
  var category = req.params.category;
  var id = req.params.id;
  if (BLOG_CATEGORIES.indexOf(category) >= 0) {
    var title = 'Week ' + id + ' ' + category + ' blog post';
    res.render('blog-posts/' + category + '/' + id, { title: title, layout: 'layouts/blog' });
  }
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
