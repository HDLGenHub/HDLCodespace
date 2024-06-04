import axios from "axios";
import { version } from "react";

const Api = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

export const execute = async (language, version, code) => {
    const response = await Api.post("/execute", {
        language: language,
        version: version,
        files: [
            {
                content: code
            }
        ]
    });
    return response.data;
}