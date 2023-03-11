import { instanceWithToken } from "../axios/axiosInstance";
import { getToken, tokenDecode } from "./token";

//candidature
export const storeApplication = async (letter, id_job) => {
    const token = getToken();
    const tokenDecoded = tokenDecode();
    // console.log( tokenDecoded.sub, letter, id_job);

    if (!letter) letter = "Nessuna presentazione";
    const objectHeader = JSON.stringify({
        job_ads_id: Number(id_job),
        user_id: Number(tokenDecoded.sub),
        cover_letter: letter,
    });

    // console.log(objectHeader)

    try {
        const application = await instanceWithToken(token).post(
            "/applications",
            objectHeader,
            {
                headers: {
                    "content-type": "text/json",
                },
            }
        );

        return application.data;
    } catch (error) {
        return false;
    }
};

export const storeCV = async (cvfile) => {
    const token = getToken();

    // console.log(cvfile);

    const formData= new FormData();
    formData.append("cvfile", cvfile);


    // for (const value of formData.values()) {
    //   console.log("valore",value);
    // }

    try {
        const response = await instanceWithToken(token).post("/cv", formData, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        return false;
    }
};
