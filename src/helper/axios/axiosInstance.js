import axios from "axios";

const domain= process.env.REACT_APP_SERVER_DOMAIN;

export const instanceSign = axios.create({
     baseURL: domain+'api/',
   });

export const instanceWithToken =(token)=> {return axios.create({
     baseURL:  domain+'api/auth/',
     headers: {Authorization:`Bearer ${token}`}
   }); }