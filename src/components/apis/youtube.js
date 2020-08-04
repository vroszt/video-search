import axios from 'axios';

const KEY = 'AIzaSyAL40Gt0v8flV1xZ5sOw5ZnAVfgZK1_9Lo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});