import axios from 'axios'

// Sử dụng biến môi trường trong USER_API_URL
const USER_API_URL = process.env.VUE_APP_AUTH_URL;

class UserDataService {

    retrieveAllUsers() {
        return axios.get(`${USER_API_URL}/users`);
    }

    retrieveUser(id) {
        console.log(USER_API_URL);
        return axios.get(`${USER_API_URL}/users/${id}`);
    }

    deleteUser(id) {
        return axios.delete(`${USER_API_URL}/users/${id}`);
    }

    updateUser(id, user) {
        return axios.put(`${USER_API_URL}/users/${id}`, user);
    }
    createUser(user) {
        return axios.post(`${USER_API_URL}/users`, user);
    }
  }
export default new UserDataService()
