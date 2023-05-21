import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="py-6">
            <div className="flex items-center justify-between container mx-auto">
                <h1 className="text-white font-black text-4xl">Castaway</h1>
                <div className="flex text-white">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink className="mx-14" to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;