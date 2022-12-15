import React from 'react';
import breakFast from "./imgs/breakfast-1.jpg"


export default function Menu() {
    return (
        <div >
            <div id="Menu" className="text-center px-4 md:px-10 lg:m-auto lg:w-[80vw] ">
                <div className="py-10">
                    <div className="text-red-300"> Specialities</div>
                    <div className="font-extrabold text-3xl secondary-font">Our Menu</div>
                </div>
                <div className="">
                    <div className=" lg:px-5">
                        <div className="font-semibold text-2xl py-7 secondary-font">Breakfast</div>

                        <div className="flex justify-between  py-3 ">
                            <div className="flex">
                                <img className="rounded-full h-20" src={breakFast} alt="" />
                                <div className="px-5 text-left">
                                    <div className="w-[4ch] text-lg">Egg Sandwich</div>
                                    <div className='text-xs'>Meat Ball, Mie</div>
                                </div>
                            </div>
                            <div className="text-lg font-thin">$30</div>
                        </div>
                        <hr />
                        <div className="flex justify-between py-3 ">
                            <div className="flex">
                                <img className="rounded-full h-20" src={breakFast} alt="" />
                                <div className="px-5 text-left">
                                    <div className="w-[4ch] text-lg">Egg Sandwich</div>
                                    <div className='text-xs'>Meat Ball, Mie</div>
                                </div>
                            </div>
                            <div className="text-lg font-thin">$30</div>
                        </div>
                        <hr />
                        <div className="flex justify-between py-3 ">
                            <div className="flex">
                                <img className="rounded-full h-20" src={breakFast} alt="" />
                                <div className="px-5 text-left">
                                    <div className="w-[4ch] text-lg">Egg Sandwich</div>
                                    <div className='text-xs'>Meat Ball, Mie</div>
                                </div>
                            </div>
                            <div className="text-lg font-thin">$30</div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="">
                    <div className=" lg:px-5">
                        <div className="font-semibold text-2xl py-7 secondary-font">Lunch</div>

                        <div className="flex justify-between py-3 ">
                            <div className="flex">
                                <img className="rounded-full h-20" src={breakFast} alt="" />
                                <div className="px-5 text-left">
                                    <div className="w-[4ch] text-lg">Egg Sandwich</div>
                                    <div className='text-xs'>Meat Ball, Mie</div>
                                </div>
                            </div>
                            <div className="text-lg font-thin">$30</div>
                        </div>
                        <hr />
                        <div className="flex justify-between py-3 ">
                            <div className="flex">
                                <img className="rounded-full h-20" src={breakFast} alt="" />
                                <div className="px-5 text-left">
                                    <div className="w-[4ch] text-lg">Egg Sandwich</div>
                                    <div className='text-xs'>Meat Ball, Mie</div>
                                </div>
                            </div>
                            <div className="text-lg font-thin">$30</div>
                        </div>
                        <hr />
                        <div className="flex justify-between py-3 ">
                            <div className="flex">
                                <img className="rounded-full h-20" src={breakFast} alt="" />
                                <div className="px-5 text-left">
                                    <div className="w-[4ch] text-lg">Egg Sandwich</div>
                                    <div className='text-xs'>Meat Ball, Mie</div>
                                </div>
                            </div>
                            <div className="text-lg font-thin">$30</div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="">
                    <div className=" lg:px-5">
                        <div className="font-semibold text-2xl py-7 secondary-font">Dinner</div>

                        <div className="flex justify-between py-3 ">
                            <div className="flex">
                                <img className="rounded-full h-20" src={breakFast} alt="" />
                                <div className="px-5 text-left">
                                    <div className="w-[4ch] text-lg">Egg Sandwich</div>
                                    <div className='text-xs'>Meat Ball, Mie</div>
                                </div>
                            </div>
                            <div className="text-lg font-thin">$30</div>
                        </div>
                        <hr />
                        <div className="flex justify-between py-3 ">
                            <div className="flex">
                                <img className="rounded-full h-20" src={breakFast} alt="" />
                                <div className="px-5 text-left">
                                    <div className="w-[4ch] text-lg">Egg Sandwich</div>
                                    <div className='text-xs'>Meat Ball, Mie</div>
                                </div>
                            </div>
                            <div className="text-lg font-thin">$30</div>
                        </div>
                        <hr />
                        <div className="flex justify-between py-3 ">
                            <div className="flex">
                                <img className="rounded-full h-20" src={breakFast} alt="" />
                                <div className="px-5 text-left">
                                    <div className="w-[4ch] text-lg">Egg Sandwich</div>
                                    <div className='text-xs'>Meat Ball, Mie</div>
                                </div>
                            </div>
                            <div className="text-lg font-thin">$30</div>
                        </div>
                        <hr />
                    </div>
                </div>

            </div>
        </div>
    )
}
