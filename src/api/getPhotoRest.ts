import {BASE_KEY, BASE_URL} from "../const/config"
import axios, {AxiosRequestConfig} from "axios";

export const getPhotoRest = () => {
    const config : AxiosRequestConfig = {
        baseURL: BASE_URL,
        url: '/photos',
        method: 'get',
        params : {
            page : 1,
            per_page: 15,
            client_id: BASE_KEY,
        }
    }
   return axios(config);
}
