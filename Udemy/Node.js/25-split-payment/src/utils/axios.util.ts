import axios, { AxiosInstance } from "axios";
import {environments} from "@/config/environment.config";

export const getPayzeApi = (): AxiosInstance => axios.create({
    baseURL: environments.PAYZE_API_URL,
});