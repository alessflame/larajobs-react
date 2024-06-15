import { instanceSign, instanceWithToken } from "../../axios/axiosInstance";
import { getToken } from "../token";

export const fetchSign = async (type, data) => {
    try {
        const request = await instanceSign.post(`/authenticate/${type}`, data);
        return request.data;
    } catch (e) {
        return false;
    }
};

export const fetchLogout = async () => {
    try {
        let response = await instanceWithToken(getToken()).post("logout");
        return response.data.message;
    } catch (e) {
        return false;
    }
};



export const fetchUpdateUser = async (data) => {
    try {
        let response = await instanceWithToken(getToken()).put(
            "me/update",
            data
        );
        return response.data.message;
    } catch (e) {
        return false;
    }
};
