import jwt_decode from "jwt-decode";

export const setToken = (token) => {
  if(token){
  localStorage.setItem("jwtLarajobs", token);
  }
};

export const getToken = () => {
  let token = localStorage.getItem("jwtLarajobs");
  if (!token) {
    return false;
  }
  return token;
};

export const deleteToken = () => {
  localStorage.removeItem("jwtLarajobs");
};

export const tokenDecode =()=> {
  const jwt=getToken();
  if(jwt) return jwt_decode(jwt);
};
