import React from 'react';
import Jacobs from "../../../assets/img/hero.png"
import {HiOutlineArrowRight} from "react-icons/hi";

const Jacob = () => {
    return (
       <div className="py-16">
           <div className="container py-16 flex justify-between items-center">
               <div className="w-[40%]">
                   <button className="w-[80px] h-[80px] flex items-center justify-center text-5xl rounded-full bg-blue-400 text-white"><HiOutlineArrowRight/></button>
                   <h6 className="text-teal-900 py-3">Meet your host</h6>
                   <h1 className="text-white text-6xl">Jacob Paulaner</h1>
                   <p className="text-white text-lg py-6">Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
                   <p className="text-white text-lg">He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
               </div>
               <img src={Jacobs} alt="img"/>
           </div>
       </div>
    );
};

export default Jacob;