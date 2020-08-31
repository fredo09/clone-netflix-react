// Set up axios

import axios from 'axios'

/** 
* base url to make requests to the the movies database 
**/
export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})
