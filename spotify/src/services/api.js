import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000",
    playList: "http://localhost:3000/playList",
    suporte: "http://localhost:3000/suporte",
    cadastro: "http://localhost:3000/inscreva-se",
    login: "http://localhost:3000/login"
});

export default api; 