
const fs = require('fs').promises;
const path = require('path');

const fullPath = path.join(__dirname, "../db/images.json");
 

const saveFile = async (req,res, next) => {
  console.log('saveFile function');
  console.log(req.file);
  const buf = req.file.buffer;
  newImage = 'data:image/png;base64,'+ buf.toString('base64');
  
  try {
    const data  = await fs.readFile(fullPath); 
    const jsonData = JSON.parse(data);
    
    console.log(jsonData)
    
    const newData = [...jsonData, { src: newImage } ]
    await fs.writeFile(fullPath,JSON.stringify(newData));

    res.json({msg:"Save image sucsess", saved:true});

  } catch (error) {
      console.log(error);
      res.status(500).json({msg:"Erorr from try catch"})
  }


};

const sendFiles = async (req,res, next) => {
  console.log('utils -> sendFiles function');
  try {
    const result = await fs.readFile(fullPath);
    res.json({result})

  } catch (error) {
    console.log(`Error Save File, Error: ${error}`);
    res.json({msg:'Faild To Retrive Images'});

  }
};


const deleteAll = async () => {
    // delete all image from the db 

};


module.exports = { saveFile, sendFiles,deleteAll };
