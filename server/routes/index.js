const express = require('express');
const router = express.Router();

const {saveFile, sendFiles,deleteAll } = require('../utils/');


const multer = require('multer');
const upload = multer();


router.get('/get-images',sendFiles);


// we can use PUT method for update the json file
router.post('/save-image', upload.single('file'), saveFile)


router.delete('/delete-all-images',deleteAll);


module.exports = router; 

