import React from 'react';
import chef1 from "./imgs/chef-1.jpg"
import chef2 from "./imgs/chef-2.jpg"
import chef3 from "./imgs/chef-3.jpg"


export default function Team() {
    return (
        <div >
            <div id="Team" className="OUR-TEAMS px-4  text-center md:px-10 lg:w-[] lg:m-auto">
                <div className="py-4">
                    <div className="text-red-400 text-sm">Specialties</div>
                    <div className="text-3xl font-extrabold secondary-font">Our Team</div>
                </div>

                <div className="md:flex md:justify-between secondary-font">
                    <div className="my-5 bg-cover md:w-[30%]">
                        <img src={chef1} alt="" />
                        <div
                            className=" relative  bg-black text-white md:my-3 lg:bg-white lg:text-black min-w-min text-xl font-medium  mx-5 hover:bg-red-400 hover:text-white cursor-pointer  ease-in duration-200">
                            Sourabh Jr.
                            <div className="font-thin">CEO</div>
                        </div>
                    </div>
                    <div className="my-5 bg-cover md:w-[30%]">
                        <img src={chef2} alt="" />
                        <div
                            className=" relative bg-black text-white md:my-3 lg:bg-white lg:text-black min-w-min text-xl font-medium  mx-5 hover:bg-red-400 hover:text-white cursor-pointer ease-in duration-200">
                            Daniel Tebas
                            <div className="font-thin">Chef</div>
                        </div>
                    </div>
                    <div className="my-5 bg-cover md:w-[30%]">
                        <img src={chef3} alt="" />
                        <div
                            className=" relative bg-black text-white md:my-3 lg:bg-white lg:text-black min-w-min text-xl font-medium  mx-5 hover:bg-red-400 hover:text-white cursor-pointer ease-in duration-200">
                            Jon Snow
                            <div className="font-thin">Chef</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
