import React, { useState, useEffect } from 'react';

export default function HappyCustomer() {

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


  useEffect(() => {
    autoSlider()
  }, [])


  const [number, setNumber] = useState(0);

  function autoSlider() {
    setInterval(() => {
        let random = Math.floor(Math.random() * 9)
      setNumber(random)
    }, 3000);
  }


    return (
      <div >
        <div className="happy-customer py-10">
          <div 
            className="text-box text-center flex flex-col justify-center items-center  ">
            <img className='object-cover md:h-[50vh] lg:h-[70vh] md:w-[100vw]' src={require(`${images[`${number}`].img}`)} alt="" />
            <h1 className=" text-2xl py-5 text-green-500">Customer Reviews</h1>
            <p className="sm:w-[25ch] md:w-[80%] font-medium "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus vitae quasi repellat provident, earum totam aliquam similique saepe, iusto cumque, error reprehenderit! <span id="review"></span> ---</p>
          </div>
        </div>
      </div>
    )
  }
