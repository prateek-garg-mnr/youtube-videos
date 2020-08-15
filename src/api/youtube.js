import axios from 'axios'
const KEY = 'AIzaSyB8cMcu2HR9m4TJqHCKUoNJOd-oZJIipng'


export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
        type:'video'
    },
})