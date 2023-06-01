interface User {
    user_id: number;
    user_name: string;
}

interface UserApiResponse {
    message: string;
    data: User;
    error: string | null;
}

export { User, UserApiResponse };
