import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import paginado from "../../Components/Paginate/paginado";
import created from "../../Components/Created/created";
import functions from "../../Components/Filter and order/functions"
import cards from "../../Components/Cards/cards";
import header from "../../Components/Header/header";
import s from "./home.module.css";

const home = () => {
    const dispatch = useDispatch();

    const allGames = useSelector((state) => state.allVideogames);
    console.log("allGames", allGames);

    useEffect(() => {
        dispatch(getAllVideogames())
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1);
    const gamePerPage = 15
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamePerPage;
    const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);
    console.log("currentGames", currentGames);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
        console.log("paginado", paginado);
    }
}
