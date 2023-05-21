import React from 'react';
import Radio from "../../../assets/img/block.svg"

const Blocks = () => {
    return (
        <div className="container py-10">
            <div className="flex items-center justify-between">
                <h1 className="text-white text-4xl">Latest episodes</h1>
                <button className="px-3 py-2 text-white bg-blue-400 rounded-xl">View all episodes</button>
            </div>
            <div className="py-8 px-8 bg-black rounded-3xl flex justify-between my-10">
                <img src={Radio} width={320} alt="img"/>
                <div className="w-[68%]">
                    <button className="my-4 text-white bg-blue-900 px-1 rounded-lg">Gear</button>
                    <h6 className="text-teal-900 py-4">Episode 3</h6>
                    <h1 className="text-white py-3 text-6xl">Should you get outboard audio gear?</h1>
                    <p className="text-white py-4">Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.</p>
                    <button className="py-2 px-4 rounded bg-blue-400 text-white">View Episode Details</button>
                </div>
            </div>
            <div className="py-8 px-8 bg-black rounded-3xl flex justify-between my-10">
                <img src={Radio} width={320} alt="img"/>
                <div className="w-[68%]">
                    <button className="my-4 text-white bg-blue-900 px-1 rounded-lg">Tips & Tricks</button>
                    <h6 className="text-teal-900 py-4">Episode 2</h6>
                    <h1 className="text-white py-3 text-6xl">Mic tricks to take you to the next level</h1>
                    <p className="text-white py-4">Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.</p>
                    <button className="py-2 px-4 rounded bg-blue-400 text-white">View Episode Details</button>
                </div>
            </div>
            <div className="py-8 px-8 bg-black rounded-3xl flex justify-between my-10">
                <img src={Radio} width={320} alt="img"/>
                <div className="w-[68%]">
                    <button className="my-4 text-white bg-blue-900 px-1 rounded-lg">Gear</button>
                    <h6 className="text-teal-900 py-4">Episode 1</h6>
                    <h1 className="text-white py-3 text-6xl">The best microphone under $200</h1>
                    <p className="text-white py-4">With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.</p>
                    <button className="py-2 px-4 rounded bg-blue-400 text-white">View Episode Details</button>
                </div>
            </div>
        </div>
    );
};

export default Blocks;