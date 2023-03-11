// import axios from "axios";
import { instanceSign, instanceWithToken } from "../axios/axiosInstance";
import { getToken } from "./token";

export const getSomeJobs = async () => {
    try {
        let jobs = await instanceSign.get("jobs");
        return jobs.data;
    } catch (e) {
        return false;
    }
};

export const getAllJobs = async (filter, number) => {
    try {
        let jobs = await instanceWithToken(getToken()).get("jobs");
        if (filter !== "") {
            let jobsFilter = jobs.data.data.filter(
                (job) => job.category === filter
            );
            return jobsFilter;
        }
        return jobs.data.data;
    } catch (e) {
        return false;
    }
};

export const getSingleJob = async (id) => {
    try {
        let job = await instanceWithToken(getToken()).get(`jobs/${id}`);
        return job.data.data.data;
    } catch (e) {
        return false;
    }
};

export const getAllCategories = async () => {
    try {
        let categories = await instanceWithToken(getToken()).get("categories");
        return categories.data.data;
    } catch (e) {
        return false;
    }
};

//get candidature del singolo user
export const getApplications = async (maxSize = null) => {
    try {
        let applications = await instanceWithToken(getToken()).get(
            "applications"
        );
        // console.log(applications.data);
        if (maxSize) {
            return applications.data.data.data.slice(0, maxSize);
        }
        return applications.data.data.data;
    } catch (e) {
        return [];
    }
};

export const getSingleApplication = async (id) => {
    try {
        let application = await instanceWithToken(getToken()).get(`applications/${id}`);
        return application.data.data.data;
    } catch (e) {
        return false;
    }
};


export const getCvFile=async() =>{
    try {
        let cv = await instanceWithToken(getToken()).get("cv");
        return cv.data.data.data;
    } catch (e) {
        return false;
    }
};



