import axios from 'axios';

export const test1 = async() => {
    return await axios.get('http://172.20.50.70:32001/api/chat-rooms')
} 

