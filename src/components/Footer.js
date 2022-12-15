import React from 'react'

export default function Footer() {
    return (
        <div >
            <div className="ENDING px-4 md:px-10 lg:flex lg:space-x-10 lg:py-10 lg:w-[80vw] lg:m-auto">

                <div className=" lg:w-[30vw]">
                    <div className="primary-font text-5xl font-semibold">Foodie</div>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quis eaque animi, ea
                            doloribus
                            aperiam tempore illum illo debitis incidunt? Porro quaerat inventore hic, officiis commodi
                            repellat
                            eos? Repellat maiores quos explicabo sed! Excepturi?</p>
                    </div>

                    <div className="py-8 space-x-4 flex">
                        <div><img className="cursor-pointer hover:bg-red-500 hover:text-white ease-in duration-200 "
                            src="imgs/iconmonstr-facebook-1.svg" alt=""/></div>
                        <div><img className="cursor-pointer hover:bg-red-500 hover:text-white ease-in duration-200 "
                            src="imgs/iconmonstr-twitter-1.svg" alt=""/></div>
                        <div><img className="cursor-pointer hover:bg-red-500 bg ease-in duration-200 "
                            src="imgs/iconmonstr-instagram-11.svg" alt=""/></div>
                    </div>

                </div>

                <div className="lg:w-[30vw]">

                    <div className="text-2xl py-4 lg:font-medium secondary-font font-semibold"> Open Hours</div>
                    <div className="flex justify-between">
                        <div>
                            <div className="days">Monday</div>
                            <div className="days">Tuesday</div>
                            <div className="days">Wednessday</div>
                            <div className="days">Thursday</div>
                            <div className="days">Friday</div>
                            <div className="days">saturday</div>
                            <div className="days">Sunday</div>
                        </div>
                        <div>
                            <div>9:00 - 24:00</div>
                            <div>9:00 - 24:00</div>
                            <div>9:00 - 24:00</div>
                            <div>9:00 - 24:00</div>
                            <div>9:00 - 24:00</div>
                            <div>9:00 - 24:00</div>
                            <div className="text-right">Closed</div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[30vw] ">
                    <div className="py-4">
                        <h1 className="text-2xl py-2 lg:font-medium secondary-font font-semibold">Newsletter</h1>
                        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores distinctio, incidunt quae
                            voluptatum
                            assumenda fuga maxime?</div>
                    </div>
                    <div className=" border border-black rounded "><input className="w-full py-2 md:w-full" type="email" name="" id=""
                        placeholder="Enter email"/></div>
                    <div
                        className="bg-red-500 rounded-full text-white text-center my-5 hover:bg-red-300 hover:text-black ease-in duration-200 ">
                        <button className="px-8 py-2  font-bold ">Submit</button>
                    </div>
                </div>
            </div>



            <div className="px-4 py-10 text-center">
                <p>
                    Copyright 2077. All Rights Reserved. Design by <span className="text-red-600">
                        <a href="https://www.instagram.com/sourabh_jyoti_das/">SOURABH JYOTI DAS</a>
                    </span>
                </p>

            </div>
        </div>
    )
}
