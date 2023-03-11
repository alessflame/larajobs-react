import { useSelector } from "react-redux";
// import logoutUser from "./logoutUser";

function useAuth(values) {
  const token= useSelector(state=>state.auth.token);
  const user= useSelector(state=>state.auth.user);
  const isLogged= useSelector(state=>state.auth.isLogged);
  // if(!auth.isLogged) return logoutUser();
  return [token, user, isLogged];
}

export default useAuth;
