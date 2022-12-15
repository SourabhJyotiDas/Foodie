import React from 'react';
import img6 from "./imgs/6.jpg"
import img7 from "./imgs/7.jpg"


export default function Specialities() {
    return (
        <div >
            <div className="SPECIAL-DISHES md:px-10 lg:px-10 ">
                <div className=" px-4 text-center py-14">
                    <div className="text-red-400">Specialities</div>
                    <div id="SpeacialDishes" className="font-bold text-3xl lg:text-3xl secondary-font">Special Dishes</div>
                </div>

                <div className="px-4 md:my-10">
                    <div className="font-extrabold text-3xl">01.</div>
                    <div className="md:flex md:justify-evenly md:items-center ">
                        <div className=" md:w-[40%]">
                            <div className="font-medium text-2xl ">
                                <div className="text-red-500 font-semibold secondary-font">Beef</div>
                                <div className=" secondary-font font-semibold">Steak Sauce</div>
                                <div className="text-base font-semibold p-font">Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit.
                                    Sint,
                                    nemo cupiditate nesciunt eos, alias cumqurepellat dolor at, odio quae sapiente
                                    recusandae.enim
                                    perferendis debitis suscipit tempora fugit, similique sint ut, cumque error distinctio.
                                </div>
                                <div className="text-2xl  font-semibold py-5">$15.00</div>
                                <button
                                    className="px-4 py-2 font-thin text-base bg-red-600 hover:bg-red-400 hover:text-black rounded-3xl ease-in duration-200  text-white">Book
                                    A
                                    Table</button>
                            </div>
                        </div>
                        <div className="py-10 flex justify-center md:w-[50%]">
                            <img className="h-[70vh] shadow-2xl md:w-[100%] lg:w-[30vw] lg:rounded-lg"
                                src={img6} alt="" /></div>
                    </div>
                </div>



                <div className="px-4 ">
                    <div className="font-extrabold text-3xl">02.</div>
                    <div className="md:flex md:flex-row-reverse md:justify-evenly md:items-center ">
                        <div className=" md:w-[40%]">
                            <div className="font-medium text-2xl ">
                                <div className="text-red-500 font-semibold secondary-font">Beef</div>
                                <div className=" secondary-font font-semibold">Steak Sauce</div>
                                <div className="text-base font-semibold p-font">Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit.
                                    Sint,
                                    nemo cupiditate nesciunt eos, alias cumqurepellat dolor at, odio quae sapiente
                                    recusandae.enim
                                    perferendis debitis suscipit tempora fugit, similique sint ut, cumque error distinctio.
                                </div>
                                <div className="text-2xl  font-semibold py-5">$15.00</div>
                                <button
                                    className="px-4 py-2 font-thin text-base bg-red-600 hover:bg-red-400 hover:text-black rounded-3xl ease-in duration-200  text-white">Book
                                    A
                                    Table</button>
                            </div>
                        </div>
                        <div className="py-10 flex justify-center md:w-[50%]">
                            <img className="h-[70vh] shadow-2xl md:w-[100%] lg:w-[30vw] lg:rounded-lg"
                                src={img7} alt="" /></div>
                    </div>
                </div>




               
            </div>
        </div>
    )
}
