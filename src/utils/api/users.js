import axios from '../../core/axios';

export default {
    getAll: () => {
        return axios.get('/contact');
    },
    getUser: (id) => {
        return axios.get(`/contact/${id}`);
    },
    deleteUser: (id) => {
        return axios.delete(`/contact/${id}`)
    },
    addUser: (user) => {
        const data = JSON.stringify(user);
        return axios.post('/contact/', data )
    },
    updateUser: (id, user) => {
        const data = JSON.stringify(user);
        return axios.put(`/contact/${id}`, data )
    },
}
