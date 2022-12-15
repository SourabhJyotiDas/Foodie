import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdFastfood, MdNoFood } from 'react-icons/md';

export default function Header() {

    const handleMenu = () => {
        document.querySelector('.nav').classList.toggle('hidden');
        document.querySelector('.cross').classList.toggle('hidden');
        document.querySelector('.ham').classList.toggle('hidden');
    }

    const handleClose = () => {
        document.querySelector('.ham').classList.toggle('hidden');
        document.querySelector('.cross').classList.toggle('hidden');
        document.querySelector('.nav').classList.toggle('hidden');
    }

    return (
        <div className='sticky top-0 z-20 '>
            <div
                className=" NAVBAR  danger-font flex sticky top-0  bg-white  justify-between items-center py-3 px-4 z-10 lg:flex lg:justify-center lg:px-10 lg:items-center">
                <div className="primary-font font-medium text-5xl md:text-7xl lg:hidden">
                    <h1><a href="#Home">Foodie</a></h1>
                </div>

                <div id="hamburger" className=" ham lg:hidden">  <MdFastfood onClick={handleMenu} className='text-2xl' /></div>
                <div id="" className="hidden cross"> <MdNoFood onClick={handleMenu} className='text-2xl' /></div>

                <div className="hidden md:hidden  lg:flex lg:justify-center lg:px-10 lg:items-center ">
                    <div className="flex items-center justify-center space-x-5">
                        <div
                            className="hover:underline hover:underline-offset-4 cursor-pointer hover:text-red-500 ease-in duration-200">
                            <a href="#Home">Home</a></div>
                        <div
                            className="hover:underline hover:underline-offset-4 cursor-pointer hover:text-red-500 ease-in duration-200">
                            <a href="#About">About</a></div>
                        <div
                            className="hover:underline hover:underline-offset-4 cursor-pointer hover:text-red-500 ease-in duration-200">
                            <a href="#SpeacialDishes">Speacial
                                Dishes</a></div>

                    </div>
                    <div>
                        <div
                            className="primary-font font-medium text-5xl md:text-7xl lg:px-20 cursor-pointer hover:text-red-500 ease-in duration-300">
                            <h1><a href="#Home">Foodie</a></h1>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-5">
                        <div
                            className="hover:underline hover:underline-offset-4 cursor-pointer hover:text-red-500 ease-in duration-200">
                            <a href="#Menu">Menu</a></div>
                        <div
                            className="hover:underline hover:underline-offset-4 cursor-pointer hover:text-red-500 ease-in duration-200">
                            <a href="#Team">Team</a></div>
                        <div
                            className="hover:underline hover:underline-offset-4 cursor-pointer hover:text-red-500 ease-in duration-200">
                            <a href="#Reservation">Reservation</a></div>
                        <div><BiSearchAlt2 className='text-4xl' /></div>
                    </div>
                </div>
            </div>

            <div className='hidden nav '>
                <div className="danger-font px-5 py-5  w-screen space-y-4 z-20 h-[100vh] flex flex-col justify-center items-center bg-gray-300">
                    <div onClick={handleClose} className=" hover:underline hover:underline-offset-4"><a href="#Home">Home</a></div>
                    <div onClick={handleClose} className=" hover:underline hover:underline-offset-4"><a href="#About">About</a></div>
                    <div onClick={handleClose} className=" hover:underline hover:underline-offset-4"><a href="#SpeacialDishes">Speacial Dishes</a></div>
                    <div onClick={handleClose} className=" hover:underline hover:underline-offset-4"><a href="#Menu">Menu</a></div>
                    <div onClick={handleClose} className=" hover:underline hover:underline-offset-4"><a href="#Team">Team</a></div>
                    <div onClick={handleClose} className=" hover:underline hover:underline-offset-4"><a href="#Reservation">Reservation</a></div>
                    <div><BiSearchAlt2 className='text-4xl' /></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
