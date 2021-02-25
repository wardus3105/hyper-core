import fetch from "node-fetch";
const fetchtest = () => {
    fetch('https://api.github.com/users/github').then(res => res.json);
}
export { fetchtest }

