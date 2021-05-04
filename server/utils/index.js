const fs = require('fs');
const fsPromisses = fs.promises;

const path = require('path');

const fullPath = path.join(__dirname, "../db/images.json");
 

const saveFile = async (req,res, next) => {
  console.log('saveFile function');
  const buf = req.file.buffer;
  newImage = 'data:image/png;base64,'+ buf.toString('base64');
  
  try {
    const data  = await fsPromisses.readFile(fullPath); 
    
    const jsonData = JSON.parse(data);
    const newData = [...jsonData, { src: newImage } ]
    await fsPromisses.writeFile(fullPath,JSON.stringify(newData));

    res.json({msg:"Save image sucsess", saved:true});

  } catch (error) {
      console.log(error);
      res.status(500).json({msg:"Erorr from try catch"})
  }


};



const sendFiles = async (req,res, next) => {
  console.log('utils -> sendFiles function');
  try {

    if (fs.existsSync(fullPath)) {
      console.log('fs.existsSync');

    }

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
    res.json({msg:'Faild To Retrive Images'});

  }


};


module.exports = { saveFile, sendFiles,deleteAll };
