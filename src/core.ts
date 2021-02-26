import axios from 'axios';
export default class CoreTest {
    async test1(){
        return await axios.get('http://172.20.50.70:32001/api/chat-rooms')
    } 
}

