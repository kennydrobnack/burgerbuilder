import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-builder-42.firebaseio.com/'
})

export default instance