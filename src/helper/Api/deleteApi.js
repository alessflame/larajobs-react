import { getToken, tokenDecode } from "./token";
import { instanceWithToken } from "../axios/axiosInstance";

export const deleteApplication = async (id_application) => {
    const token = getToken();
    const tokenDecoded = tokenDecode();

    const objectHeader = JSON.stringify({
        id: Number(id_application),
        user_id: Number(tokenDecoded.sub),
    });

    try {
        const application = await instanceWithToken(token).delete(
            "/applications",
            {
                headers: {
                    'content-type': 'text/json',
                },
                data:objectHeader
            }
        );
        return application.data;
    } catch (error) {
        return false;
    }
};

export const deleteCvFile=async() =>{
    try {
        let cv = await instanceWithToken(getToken()).delete("/cv");
        console.log(cv.data);
        return cv.data;
    } catch (e) {
        return false;
    }
};
