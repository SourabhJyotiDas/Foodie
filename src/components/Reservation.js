import React from 'react'
import img from "./imgs/reservation-bg.jpg"

export default function Reservation() {
    return (
        <div >
            <div id="Reservation" className="BOOK-NOW h-[100vh] md:h-[120vh] py-5 lg:py-20">
                <div className="h-[80vh] w-[100%]  " style={{ backgroundImage: `url(${img})` }}>
                    <div
                        className="text-center mx-4 drop-shadow-2xl  bg-white relative top-5 md:mx-10 md:px-10 lg:w-[30vw] lg:left-32">
                        <div className="py-5">
                            <h3 className="text-red-300">Reservation</h3>
                            <h1 className="font-bold text-2xl md:text-4xl secondary-font">Book Now</h1>
                        </div>

                        <div><input className="py-1 px-6 md:w-full border border-black rounded my-2" type="text" placeholder="Name" />
                        </div>
                        <div><input className="py-1 px-6 md:w-full border border-black rounded my-2" type="email"
                            placeholder="Email" />
                        </div>
                        <div><input className="py-1 px-6 md:w-full border border-black rounded my-2" type="phone"
                            placeholder="Phone" />
                        </div>
                        <div><input className="py-1 px-8 md:w-full border border-black rounded my-2" type="date" name="" id="" />
                        </div>
                        <div><input className="py-1 px-6 md:w-full border border-black rounded my-2" type="time" name="" id="" />
                        </div>
                        <div><input className="py-10 px-6 md:w-full md:py-20 border border-black rounded my-2" type="text" name=""
                            id="" placeholder="Your Message..." /></div>
                        <button
                            className="py-2 px-4 bg-red-500  hover:bg-red-300 hover:text-black ease-in duration-200 font-semibold text-white rounded-full mb-10">Send
                            Message</button>
                    </div>


                </div>
            </div>
        </div>
    )
}
