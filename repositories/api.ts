import { UserApiResponse } from "../models/user";
import axios from "axios";

interface ApiRepository {
    getUserById: (user_id: number) => Promise<UserApiResponse>;
}

async function ApiRepositoryInit(): Promise<ApiRepository> {
    return {
        getUserById: async (user_id: number) => {
            let url = process.env.SERVICE_USER + "/" + user_id;
            let resp = await axios.get<UserApiResponse>(url);

            return resp.data;
        },
    };
}

export { ApiRepositoryInit, ApiRepository };
