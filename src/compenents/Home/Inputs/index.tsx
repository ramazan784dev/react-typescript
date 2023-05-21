import React from 'react';

const Inputs = () => {
    return (
        <div className="container bg-black flex items-start justify-around py-14 rounded-3xl">
            <div>
                <h6 className="text-teal-900">Email Newsletter</h6>
                <h1 className="text-white text-6xl">Subscribe <br/> for updates</h1>
            </div>
            <div className="flex justify-center flex-col">
                <input className="w-[500px] h-[50px] bg-neutral-800 rounded-lg px-4 outline-none" type="text" placeholder="Name" />
                <input className="my-5 w-[500px] h-[50px] bg-neutral-800 rounded-lg px-4 outline-none" type="email" placeholder="Email"/>
                <button className="bg-blue-400 text-white py-2  w-[100px] rounded-lg">Submit</button>
            </div>
        </div>
    );
};

export default Inputs;