import axios from 'axios';


export const uploadImage = async (img)=>{
    console.log("uploadImage")
    
  const data = new FormData();
  data.append('file', img);

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };

  try {
    const response = await axios.post('http://localhost:2000/save-image',data,config );
    return response.status === 200  ? true : false 

  } catch (error) {
    console.log(`Error Save Image, Error: ${error}`);
    return false;
  }

};



export const fetchImages = async ()=>{
    console.log("fetchImages");
    try {

        const response = await axios.get('http://localhost:2000/get-images');

        const {result } = response.data;
        console.log(result);
        return result;
              
    } catch (error) {
        console.log(`Error from fetch Image function, Error: ${error}`);
        
    }

};




export const deleteAllImage = async ()=>{
  console.log("DeleteAllImage");
  try {

    const response = await axios.delete('http://localhost:2000/delete-all-images');
    console.log(response.data);
          
} catch (error) {
    console.log(`Error from Delete All Image, Error: ${error}`);
    
}
}

