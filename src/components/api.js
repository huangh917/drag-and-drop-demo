import axios from 'axios';


const apiUrl = axios.create({
    baseURL: 'http://localhost:3000/api',
  });

// const apiUrl = 'https://run.mocky.io/v3/95cf853b-8358-43a9-80ca-1786d8c7c36c';

export const singleFileUpload = async (data, options) => {
    try {
        await axios.post(apiUrl , data, options);
    } catch (error) {
        throw error;
    }
}
export const getSingleFiles = async () => {
    try {
            const {data} = await axios.get(apiUrl);
            return data;
    } catch (error) {
        throw error;
    }
}