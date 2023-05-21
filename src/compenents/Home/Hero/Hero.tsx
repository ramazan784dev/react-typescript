import React from 'react';
import HeroUser from "../../../assets/img/hero.png"
import Icons from "../../../assets/img/iconca.svg"


const Hero = () => {
    return (
        <div className="">
            <div className="container flex items-end justify-between py-16">
                <img src={HeroUser} alt="img"/>
                <div className="w-[40%]">
                    <h1 className="text-7xl text-white py-6">Take your podcast to the next
                        <span className="text-7xl font-black"> level</span></h1>
                  <div className="py-20">
                      <h1 className="text-white py-8">Listen on</h1>
                      <div className="flex ">
                          <img className="mx-2" src={Icons} alt="img"/>
                          <img className="mx-2" src={Icons} alt="img"/>
                          <img className="mx-2" src={Icons} alt="img"/>
                          <img className="mx-2" src={Icons} alt="img"/>
                          <img className="mx-2" src={Icons} alt="img"/>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;