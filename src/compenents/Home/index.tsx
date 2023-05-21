import React from 'react';
import Hero from "./Hero/Hero";
import Blocks from "./Blocks";
import Jacob from "./Jacob";
import Inputs from "./Inputs";
import Stars from "./Stars";


const Home = () => {
    return (
        <div className="">
            <Hero/>
            <Blocks/>
            <Jacob/>
            <Inputs/>
            <Stars/>
        </div>
    );
};

export default Home;