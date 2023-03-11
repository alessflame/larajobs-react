import { addJobAds, emptyJobAds } from "../slices/JobAdsSlice";
import { setIsLogged, setLogout } from "../slices/authSlice";
import { getAllJobs } from "../../helper/Api/GetApi";
import { fetchSign, fetchLogout } from "../../helper/Api/Auth/authApi";
import { deleteToken, getToken, setToken } from "../../helper/Api/token";
import { isOpen } from "../slices/modalSlice";
import jwtDecode from "jwt-decode";

export const dispatchJobsAds = (filter) => async (dispatch) => {
    dispatch(emptyJobAds());
    const jobs = await getAllJobs(filter);
    return dispatch(addJobAds(jobs));
};

export const dispatchUser = (dispatch) => {
    const token = getToken();
    if (token) {
        // console.log(jwtDecode(token).name);
        return dispatch(
            setIsLogged({ user: jwtDecode(token).name, token: token })
        );
    }
};

export const dispatchAuthUser = async (data) => async (dispatch) => {
    const response = await fetchSign("login", data);
    // console.log(response);

    if (!response) {
        return dispatch(
            isOpen({ title: "Autenticazione fallita", text: "errore" })
        );
    }

    setToken(response.data);

    const token = getToken();
    if (token) {
        // console.log(jwtDecode(token).name);
        return (
            dispatch(
                isOpen({
                    title: "Autenticazione avvenuta",
                    text: response.message,
                })
            ),
            dispatchUser(dispatch)
        );
    }
    // return response;
};

export const dispatchLogout = () => async (dispatch) => {
    // const response = await fetchSign("", data);
    // console.log(response)

    const response = await fetchLogout();
    if (response) {
        deleteToken();
        if (!getToken()) {
            dispatch(setLogout());
            return dispatch(
                isOpen({ title: "Disconnesso!", text: response.message })
            );
        }
        return dispatch(
            isOpen({
                title: "Non disconnesso!",
                text: "Qualcosa è andato starto",
            })
        );
    }
};
