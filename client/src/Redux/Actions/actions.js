import axios from "axios";
import {URL} from "../../Utils/Utils";

import {
    GET_ALL_VIDEOGAMES, GET_VIDEOGAME_BY_ID, GET_VIDEOGAME_BY_NAME, GET_BY_GENRES, CREATE_VIDEOGAME, ORDER_BY, FILTER_BY_GENRES, FILTER_BY_SOURCE,
} from "./actions-types"

export const getAllVideogames = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${URL}/videogames`)
            return dispatch({
                type: GET_ALL_VIDEOGAMES,
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getByName = (name) => {
    
}