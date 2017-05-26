var express = require('express');
var router = express.Router();
var uuid = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
// router.get('/userlist', function(req, res) {
//     var db = req.db;
//     var collection = db.get('usercollection');
//     collection.find({},{},function(e,docs){
//         res.render('emaillist', {
//             "userlist" : docs
//         });
//     });
// });

/* GET New User page. */
router.get('/newmessage', function(req, res) {
    res.render('newmessage', { title: 'Add New Message' });
});

router.get('/message/:uuid', function(req,res) {
    var db = req.db;
    var uuid = req.params.uuid;
    var collection = db.get('usercollection');
    collection.find({uuid : uuid},function(e, message){
        res.render('message', {
            "message" : message
        });
    });
});

/* POST to Add User Service */
router.post('/addmessage', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userNumber = req.body.usernumber;
    var userMessage = req.body.usermessage;
    var id = uuid.v4();
    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "number" : userNumber,
        "message" : userMessage,
        "uuid" : id
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send(err);
        }
        else {
            // Twilio Credentials
            var accountSid = 'ACe4769d82d799ca5b7718c8383eda6a64';
            var authToken = '7b75eebe75a1888e93760eed7c4e3801';
            //require the Twilio module and create a REST client
            var client = require('twilio')(accountSid, authToken);
            client.messages.create({
                to: `+1${userNumber}`,
                from: "+13477123158",
                body: `${uuid}`,
            }, function(err, message) {
                console.log(message.sid);
            });
            // And forward to success page
            res.redirect(`message/${id}`);
        }
    });
});

module.exports = router;
