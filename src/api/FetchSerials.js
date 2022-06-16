import axios from "axios";

export const fetchHero = (params) =>
    axios.get("https://rickandmortyapi.com/api/character", {
        method: "GET",
        params,
    });

export const fetchLocation = (params) =>
    axios.get("https://rickandmortyapi.com/api/location", {
        method: "GET",
        params,
    });

export const fetchEpisode = (params) =>
    axios.get("https://rickandmortyapi.com/api/episode", {
        method: "GET",
        params,
    });

export const fetchAll = (params) =>
    axios.get("https://rickandmortyapi.com/api", {
        method: "GET",
        params,
    });
