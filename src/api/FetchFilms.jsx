import axios from "axios";

export const fetchFilms = (params) =>
    axios.get("https://kinopoiskapiunofficial.tech/api/v2.2/films", {
        method: "GET",
        headers: {
            "X-API-KEY": "570b07f3-d718-472e-bee7-5a7bf318d544",
            "Content-Type": "application/json",
        },
        params,
    });

export const fetchTop = (params) =>
    axios.get("https://kinopoiskapiunofficial.tech/api/v2.2/films/top", {
        method: "GET",
        headers: {
            "X-API-KEY": "570b07f3-d718-472e-bee7-5a7bf318d544",
            "Content-Type": "application/json",
        },
        params,
    });
