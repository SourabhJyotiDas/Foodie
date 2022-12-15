import React, { useState } from 'react';
import { MdOutlineOndemandVideo, MdOutlineDeliveryDining } from 'react-icons/md';
import { CiPizza } from 'react-icons/ci';
import { Ri24HoursLine } from 'react-icons/ri';
import { GrNext, GrPrevious } from 'react-icons/gr';

export default function HeroSection1() {

    let images = [
        {
            img: ("./imgs/sl-1.jpeg"),
        },
        {
            img: ("./imgs/sl-2.jpeg")
        },
        {
            img: ("./imgs/sl-3.jpeg")
        },
        {
            img: ("./imgs/sl-4.jpeg")
        },
        {
            img: ("./imgs/sl-5.jpeg")
        },
        {
            img: ("./imgs/sl-6.jpeg")
        },
        {
            img: ("./imgs/sl-7.jpeg")
        },
        {
            img: ("./imgs/sl-8.jpeg")
        },
        {
            img: ("./imgs/sl-9.jpeg")
        },
        {
            img: ("./imgs/sl-10.jpeg")
        },
    ]

    const [number, setNumber] = useState(0);

    function sliderMode1() {
        
        if (number < 9) {
            setNumber(number + 1)
        }
        else {
            setNumber(0)
        }
    }

    function sliderMode2() {
        let main = document.getElementById('slide')
        let random = Math.floor(Math.random() * 7)
        if (number > 1) {
            setNumber(number - 1)
        }
        else {
            setNumber(9)
        }
        main.src = images[random]
    }


    return (
        <div className=''>
            <div id="Home" className=" lg:justify-evenly lg:items-center ">

                <div className=" ">
                    <div
                        className="WE-LOVE secondary-font text-5xl font-extralight w-screen py-8  flex items-center px-4 md:px-10 md:text-5xl  lg:text-6xl lg:px-10">
                        <div className="">We Love <div className=" md:w-[20ch] md:py-3">Delicious Foods!</div>
                        </div>
                    </div>
                    <div className="EXPLORE flex items-center py-5 px-4 md:px-10 md:items-center md:justify-evenly lg:px-0">
                        <div className=""><button
                            className="bg-red-500 hover:bg-red-400 hover:text-black ease-in duration-200  text-white rounded-3xl py-2 px-6 font-bold text-sm">Explore
                            Menu</button></div>
                        <div
                            className="cursor-pointer flex items-center font-bold text-sm px-3  hover:underline hover:underline-offset-4">
                            <MdOutlineOndemandVideo className='text-3xl' />Play Video
                        </div>
                    </div>
                    <div
                        className="ICONS secondary-font flex justify-center  py-8 space-x-10 font-semibold text-base md:justify-center md:bg-blue-300 md:px-10 lg:px-0">
                        <div
                            className="flex flex-col justify-center items-center text-center w-[5ch] md:min-w-max md:font-normal md:text-xl link">
                            <MdOutlineDeliveryDining className='text-3xl' /> Fast Delivery
                        </div>
                        <div
                            className="flex flex-col justify-center items-center text-center w-[6ch]  md:min-w-max md:font-normal md:text-xl link">
                            <CiPizza className='text-3xl' /> Fresh Food
                        </div>
                        <div
                            className="flex flex-col justify-center items-center text-center w-[5ch] md:min-w-max md:font-normal md:text-xl link">
                            <Ri24HoursLine className='text-3xl' /> 24/7 Support
                        </div>
                    </div>
                </div>

                <div
                    className="SLIDER py-10 px-4 md:px-10 md:flex  md:justify-around lg:flex lg:flex-col lg:justify-center lg:items-center ">

                    <div className="">
                        <img id="slide" className="lg:h-[70vh] lg:w-[100%]" src={require(`${images[`${number}`].img}`)} alt="" />
                    </div>

                    <div className="flex justify-between md:items-center">
                        <div onClick={sliderMode2}
                            className="flex cursor-pointer justify-center items-center w-[30vw] md:w-[10vw] h-[10vh] bg-slate-500 mx-2">
                            <div><GrPrevious className='text-2xl' /></div>
                        </div>

                        <div onClick={sliderMode1}
                            className="flex cursor-pointer justify-center items-center w-[30vw] md:w-[10vw] h-[10vh] bg-slate-500 mx-2">
                            <div className=""><GrNext className='text-2xl' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
