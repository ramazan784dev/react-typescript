import React from 'react';
import {AiOutlineInstagram} from "react-icons/ai";
import {FiFacebook, FiTwitter} from "react-icons/fi";
import {Link} from "react-router-dom";
import Spotify from "../.././assets/img/iconca.svg"

const Footer = () => {
    return (
        <div className="container py-20 flex items-start justify-between">
            <div>
                <h1 className="text-white text-5xl">Castaway</h1>
                <div className="flex text-white py-6">
                    <Link className="text-white text-2xl mr-4" to={"/e"}> <AiOutlineInstagram/> </Link>
                    <Link className="text-white text-2xl mr-4" to={"/e"}> <FiTwitter/> </Link>
                    <Link className="text-white text-2xl mr-4" to={"/e"}> <FiFacebook/> </Link>
                </div>
            </div>
           <div className="flex items-start justify-between w-[70%]">
               <div className="text-white flex flex-col">
                   <a href="">Home</a>
                   <a href="">About</a>
                   <a href="">Episodes</a>
                   <a href="">Contact</a>
               </div>
               <div className="text-white flex flex-col">
                   <a href="">Style Guide</a>
                   <a href="">Instructions</a>
                   <a href="">Changelog</a>
                   <a href="">Credit</a>
                   <a href="">Powered by Webflow</a>
                   <a href="">Licenses</a>
               </div>
               <div className="flex w-[450px]">
                   <img className="m-2" src={Spotify} alt="img"/>
                   <img className="m-2" src={Spotify} alt="img"/>
                   <img className="m-2" src={Spotify} alt="img"/>
                   <img className="m-2" src={Spotify} alt="img"/>
                   <img className="m-2" src={Spotify} alt="img"/>
               </div>
           </div>
        </div>
    );
};

export default Footer;