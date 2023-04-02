import axios from "axios";

export const api_key = '105b6c9ebd0bfd4f1a2b1107c70d4a03';

export const api = axios.create({
    baseUrl : 'https://api.themoviedb.org/3'
});