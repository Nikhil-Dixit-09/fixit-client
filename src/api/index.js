import axios from 'axios';
const API=axios.create({baseURL:'http://127.0.0.1:8000'});
API.interceptors.request.use((req)=>{
    // var tok=JSON.parse(localStorage.getItem('profile')).token;
    // console.log(tok);
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${localStorage.getItem('profile')}`
    }
    return req;
});
export const getResponse=(FormData)=>API.post('/user/chat/response',FormData);
