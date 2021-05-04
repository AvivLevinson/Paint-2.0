const fs = require('fs');
const fsPromisses = fs.promises;

const path = require('path');

const fullPath = path.join(__dirname, "../db/images.json");
 

const saveFile = async (req,res, next) => {
  const buf = req.file.buffer;
  newImageSrc = 'data:image/png;base64,'+ buf.toString('base64');
  
  try {

    // read file 
    const data  = await fsPromisses.readFile(fullPath); 
    const jsonData = JSON.parse(data);
    // push new image to array 
    const newData = [...jsonData, { src: newImageSrc } ]
    // write the data to file 

    await fsPromisses.writeFile(fullPath,JSON.stringify(newData));

    //send response from the server
    res.json({msg:"Save image sucsess", sucsess:true});

  } catch (error) {
      console.log(`Error to save new image on server, Error: ${error}`);
      res.status(500).json({msg:"Save image  unsucsess", sucsess:false})
  }


};



const sendFiles = async (req,res, next) => {
  
  try {
    const result = await fsPromisses.readFile(fullPath);
    res.json({result})

  } catch (error) {
    console.log(`Error Save File, Error: ${error}`);
    res.json({msg:'Faild To Retrive Images'});

  }
};


const deleteAll = async (req,res,next) => {

  console.log('utils -> deleteAll');
  try {
    const newData = []
    result = await fsPromisses.writeFile(fullPath,JSON.stringify(newData));
    res.json({result})

  } catch (error) {

    console.log(`Error Save File, Error: ${error}`);
    res.status(500).json({msg:'Faild To Retrive Images'});

  }


};


module.exports = { saveFile, sendFiles,deleteAll };
