import React from 'react';
import pokedex from "../assets/pokedex.png"
import style from "../components/LoadingScreen.module.css";

const LoadingScreen = () => {
    return (
        <div className={style.LoadingScreen} >
           <img className={style.LoadingScreenIcon}src={pokedex} alt="Pokedex" />
        </div>
    );
};

export default LoadingScreen;