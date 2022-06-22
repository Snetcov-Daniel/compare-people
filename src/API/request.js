import axios from "axios";

export async function getPeople() {
    const request = axios.get("http://localhost:3000/people");
    return await request
        .then(response => response.data)
        .catch((err) => err);
}