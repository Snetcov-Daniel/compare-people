import axios from "axios";

export default async function getPeople() {
    const request = axios.get("http://localhost:3000/people");
    return await request
        .then(response => response.data)
        .catch((err) => err);
}
