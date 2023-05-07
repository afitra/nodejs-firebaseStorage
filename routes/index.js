var express = require('express');
var router = express.Router();
var firebase = require("../helpers/firebase")
var auth = require("../middleware/auth")
const multer  = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
/* GET home page. */
router.post('/upload',  auth, upload.single('uploaded_file'), function(req, res, next) {
console.log(req.auth,">>>>>");
 
  firebase.upload(req,res,next)
 res.send("file uploaded !!!")
});

module.exports = router;
