const express = require('express');
const router = express.Router();

const multer = require('multer');

const {saveFile, sendFiles,deleteAll } = require('../utils/');



const upload = multer();

router.get('/get-images',sendFiles);

router.post('/save-image', upload.single('file'), saveFile)


router.delete('/delete-all-images',(req,res,next)=>{
    console.log('Http Delete Method');
    res.json({msg:"reposne from delete-all endPoint"});
})


module.exports = router; 


/**
 * 
 * router.post('/save-image', upload.single('file'), async (req,res,next)=>{
    console.log('save image server');
    console.log(req.file);
    try {
        const value = req.file.buffer;
        console.log(value.toString('base64'));
        //await fs.writeFile(filename, data, [encoding], [callback])
        res.json({msg:"response from save-image endPoint"});

    } catch (error) {
        console.log(error);
        res.json({msg:"Erorr from try catch"});

    }
   


    
})
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */