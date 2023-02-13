import axios from "axios";
import {KEYS} from "../utils/constants";

export const domain = "https://localhost:8000/";

let token = "";

if (typeof window !== "undefined") {
    token = localStorage.getItem(KEYS.LOCAL_STORAGE_TOKEN_KEY);
}

export const HttpCommon = axios.create({
    baseURL: `${domain}api`,
    headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
    },
});
