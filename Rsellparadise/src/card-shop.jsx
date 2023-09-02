import React, { useEffect, useState } from "react";

import { ReactDOM } from "react-dom/client";
import { Airpods, Applesupply, iphone, Jbl, earbuds, galaxy } from "./database";

import Card from "./card";

// swiper /////////////////////////////

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// -------------------

// -------------------

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

// swiper /////////////////////////////

function Cardshop() {
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

  return (
    <section className="mb-16   ">
      <h2 className=" text-4xl ml-10 mt-12 ">Airpods</h2>
      <section className=" flex mx-5">
        <div className="w-full my-auto">
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
            className="mySwiper p-8" id="airpod">
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

      <h2 className=" text-4xl ml-10 mt-12">Iphone</h2>
      <section className=" flex mx-5">
        <div className="w-full my-auto " id="Iphone">
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
            {iphone.map((data) => {
              return (
                <SwiperSlide>
                  <Card {...data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      
      <h2 className=" text-4xl ml-10 mt-12">JBL</h2>
      <section className=" flex mx-5">
        <div className="w-full my-auto " id="Jbl">
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
            {Jbl.map((data) => {
              return (
                <SwiperSlide>
                  <Card {...data} className=" z-40" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <h2 className=" text-4xl ml-10 mt-12">earbuds</h2>
      <section className=" flex mx-5">
        <div className="w-full my-auto " id="earbuds">
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
            {earbuds.map((data) => {
              return (
                <SwiperSlide>
                  <Card {...data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      <h2 className=" text-4xl ml-10 mt-12">Galaxy</h2>
      <section className=" flex mx-5">
        <div className="w-full my-auto " id="Galaxy">
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
            {galaxy.map((data) => {
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
// const Card = (props) => {
//   const { name, price, img, sale } = props;
//   return (
//     <div className=" mr-5 mt-3 bg-[#B7B5E4] px-3 rounded-lg pt-3 card-item w-48 pb-3 cursor-pointer">
//       {/* <div className=" mt-3 bg-[#B7B5E4] rounded-lg pt-3"> */}
//       <div>
//         <img src={img} className=" h-40 " />
//       </div>
//       <div className=" mt-2 relative">
//         <span>{sale}</span>
//         <h2 className="text-[15px]text-center mb-2">{name}</h2>
//         <span className=" text-2xl mt-1">{price}$</span>
//         <a
//           to=""
//           alt=""
//           className=" absolute border p-1 px-2 rounded-xl decoration-transparent right-0 buy-btn">
//           Buy
//         </a>
//       </div>
//     </div>
//   );
// };
export default Cardshop;
