import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;


export const useCastVote = () => {
    const castVote = async (candidateName: string) => {
        const port = SERVER_PORT ? `:${SERVER_PORT}` : "";
        return axios.post(`${SERVER_URL}${port}/api/cast`, {
            "vote": candidateName
        });
    }

    return { castVote };

}