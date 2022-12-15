import React, { useState } from 'react';
import img5 from "./imgs/5.jpg"
import img3 from "./imgs/3.jpg"
import img2 from "./imgs/2.jpg"
import img1 from "./imgs/1.jpg"


export default function About() {

    let images = [
        {
            img: ("./imgs/1.jpg"),
        },
        {
            img: ("./imgs/2.jpg")
        },
        {
            img: ("./imgs/3.jpg")
        }
    ]

    const [number, setNumber] = useState(0);


    function gallery(numbers) {
        setNumber(numbers)
    }


return (
    <div >
        <div className="text-xm text-red-400 danger-font text-center">About</div>
        <div className="font-semibold secondary-font  text-3xl text-center"> Welcome to Foodie</div>
        <div id="About" className="md:flex md:items-center md:px-10  md:justify-center lg:m-auto lg:space-x-10">

            <img id="aboutMain" className="py-10 md:w-[45vw] md:h-[80vh] lg:h-[90vh] lg:w-[40vw] " src={require(`${images[`${number}`].img}`)} alt="" />
            <div className="px-4 lg:w-[40vw] ">

                <div className="py-8 danger-font">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum sit accusamus. Velit
                        obcaecati exercitationem, quia laudantium est, amet qui, perferendis iusto natus eos unde architecto
                        itaque! Corrupti, voluptatum esse!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ex quidem, itaque optio,
                        laborum temporibus excepturi non soluta inventore quaerat iusto harum aliquam!
                    </p>
                </div>
                <div className="SPECIAL-RECIPE hidden md:block secondary-font">
                    <div className="font-semibold text-2xl  ">Special Recipe</div>
                    <div className="flex justify-center items-center font-semibold text-sm text-red-600 py-4">
                        <div className="px-2">
                            <div className="w-[100%] ">
                                <img
                                    className="md:w-[100%] md:h-[20vh] lg:h-[25vh] cursor-pointer opacity-[0.6] hover:opacity-[1]"
                                    onClick={() => gallery(0)} src={`${img1}`} alt="" />
                                <div className="py-2 hover:underline hover:underline-offset-4">Australian Organic Beef</div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="w-[100%] ">
                                <img
                                    className="md:w-[100%] md:h-[20vh] lg:h-[25vh] cursor-pointer opacity-[0.6] hover:opacity-[1]"
                                    onClick={() => { gallery(1) }} src={img2} alt="" />
                                <div className="py-2 hover:underline hover:underline-offset-4">Australian Organic Beef</div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="w-[100%] ">
                                <img
                                    className="md:w-[100%] md:h-[20vh] lg:h-[25vh] cursor-pointer opacity-[0.6] hover:opacity-[1]"
                                    onClick={() => { gallery(2) }} src={img3} alt="" />
                                <div className="py-2 hover:underline hover:underline-offset-4">Australian Organic Beef</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="SPECIAL-recipe px-4 md:hidden lg:hidden secondary-font">
            <div className="font-semibold text-2xl">Special Recipe</div>
            <div className="flex justify-center font-semibold text-sm text-red-600 py-4">
                <div className="px-2">
                    <div className="w-[25vw]"><img src={img1} alt="" />
                        <div className="py-2 hover:underline hover:underline-offset-4">Australian Organic Beef</div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="w-[25vw]"><img src={img3} alt="" />
                        <div className="py-2 hover:underline hover:underline-offset-4">Australian Organic Beef</div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="w-[25vw]"><img src={img5} alt="" />
                        <div className="py-2 hover:underline hover:underline-offset-4">Australian Organic Beef</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
