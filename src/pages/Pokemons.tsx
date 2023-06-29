import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import BulbasaurPic from "../assets/bulbasaur.gif"

const Pokemons = () => {
    const [query, setQuery] = useState("")
    return <>

    <Header query={query} setQuery={setQuery} />
    <main>
        <nav>
            <Link to="/">
                <img src={BulbasaurPic} alt="bulbasaur" />
                <div>
                    <span>Bulbasaur</span>
                    <span>001</span>
                </div>
            </Link>
        </nav>
    </main>
    <Footer />
    </> ;
};

export default Pokemons;