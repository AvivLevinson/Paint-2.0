import axios from 'axios';


export const uploadImage = async (img)=>{

  const data = new FormData();
  data.append('file', img);

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  };

  try {
    const response = await axios.post('http://localhost:2000/save-image',data,config );
    const {sucsess} = response.data;
    return sucsess;

  } catch (error) {

    console.log(`Error upload Image to server, Error: ${error}`);
    return false;
  }

};


export const fetchImages = async ()=>{
    try {

        const response = await axios.get('http://localhost:2000/get-images');
        const {result } = response.data;
        return result;
              
    } catch (error) {
        console.log(`Error featch data from server, Error: ${error}`);
        return false
        
    }

};




export const deleteAllImage = async ()=>{
  try {

    const response = await axios.delete('http://localhost:2000/delete-all-images');
    console.log(response.data);
    return true;
          
} catch (error) {
    console.log(`Error delete image, Error: ${error}`);
    return false
    
}
}

