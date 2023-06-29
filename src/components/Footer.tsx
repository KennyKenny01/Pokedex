import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./footer.module.css"
//assets

import PokemonsPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemsPic from '../assets/pokeball.png'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link 
            className={styles.footerLink} 
            to="/pokemons">
                <img className={styles.footerIcon} src={PokemonsPic} alt="pokeball" />
                Pokemons 
            </Link>
            <Link 
            onClick={(event => event.preventDefault)}
            className={styles.footerLink} 
            to="/pokemons">
                <img className={styles.footerIcon} src={ItemsPic} alt="Items" />
                Items 
            </Link>
            <Link 
            onClick={(event => event.preventDefault)}
            className={styles.footerLink} 
            to="/pokemons">
                <img className={styles.footerIcon} src={LocationPic} alt="Map" />
                Map
            </Link>
        </footer>
    );
};

export default Footer;