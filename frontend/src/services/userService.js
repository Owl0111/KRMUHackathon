import axios from "axios";

const baseUrl = '/';
const getUserData = async ()=> {
    const request = await axios.get(`${baseUrl}api/users`)
    console.log(request.data);
}

export default getUserData