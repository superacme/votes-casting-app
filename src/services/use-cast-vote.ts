import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;


export const useCastVote = () => {
    const castVote = async (candidateName: string) => {
        return axios.post(`${SERVER_URL}:${SERVER_PORT}/api/cast`, {
            "vote": candidateName
        });
    }

    return { castVote };

}