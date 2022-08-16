import axios from "axios";

export const geolocationApi = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode/json'
})