import React from "react";
import { useState,useEffect,reactDom } from "react";
import { Airpods, Applesupply, iphone, Jbl, earbuds, galaxy } from "../database";

import Card from "../card";

// swiper /////////////////////////////

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// -------------------

// -------------------

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";



function Similar (){
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", changeWidth);
  
      return () => {
        window.removeEventListener("resize", changeWidth);
      };
    }, []);
    return(
        <section className=" mb-20">
        <h2 className=" text-4xl ml-10 mt-12">Airpods</h2>
      <section className=" flex mx-5">
        <div className="w-full my-auto  ">
          <Swiper
            slidesPerView={
              screenWidth >= 1280
                ? 5
                : screenWidth >= 1024
                ? 4
                : screenWidth >= 768
                ? 3
                : screenWidth>= 640
                ?2
                :screenWidth>=470
                ?1.5
                :1
            }
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper p-8">
            {Airpods.map((data) => {
              return (
                <SwiperSlide>
                  <Card {...data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
        </section>
    );
}
// const Card =(props )=>{
//     const {name,price,img,sale}=props;
//     return(
//         <div className=" mr-5 mt-3 bg-[#D1D7F1] px-3 rounded-lg h-64 card-item">
//             <div>
//                 <img src={img} className="" />
//             </div>
//             <div className=" mt-2 relative">
//                 <span>{sale}</span>
//                 <h2 className="text-lg text-center">{name}</h2>
//                 <span className=" text-2xl mt-1">{price}$</span>
//                 <a to="" alt="" className=" absolute border p-2 px-2 rounded-xl decoration-transparent right-0 buy-btn-2-2-2-2 ">Buy</a>
//             </div>
//         </div>
//     );
// }
export default Similar;