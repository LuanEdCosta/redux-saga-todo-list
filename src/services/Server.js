import Axios from 'axios'

const Server = Axios.create({
  baseURL: 'https://api.github.com'
})

export default Server
