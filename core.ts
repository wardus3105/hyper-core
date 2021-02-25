import fetch from "node-fetch";
export default class CoreTest {
   public async fetchTest() {
    return fetch('https://api.github.com/users/github').then(res => res.json);
   } 
}

