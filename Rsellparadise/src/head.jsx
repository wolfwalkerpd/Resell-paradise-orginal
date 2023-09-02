import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import Navnormal from "./nav-normal"
import Navlogin from "./navlogin"
import slideimg from "./img/1.png";
import slideimg2 from "./img/2.png";
import slideimg3 from "./img/3.png";

function Head() {
  return (
    <section className=" mb-24">
      <Navlogin />
    <div className=" mx-7 grid 2xl:grid-cols-12 xl:grid-cols-12  lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 2sm:grid-cols-1 gap-4">
        {/* <div className=" pt-44 w-[500px] bg-blue-200"> */}
        <div className=" xl:pt-44 xl:col-span-5 2xl:pt-44 2xl:col-span-5 lg:col-span-4 lg:pt-16 md:col-span-12 md:my-5 sm:col-span-12 sm:my-3 2sm:my-3">
          <h2 className=" text-[63.33px] font-medium break-normal">
            Get into reselling with us
          </h2>
        </div>
        {/* <div className=" w-[700px] float-right ">
                    <div id="carouselExampleIndicators" class="carousel slide bg-[#BBC2E2] h-[400px]">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner w-[300px] ms-16 mt-20">
                        <div class="carousel-item active">
                        <img src={slideimg1} class="d-block w-100 mt-20" alt="airpod" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="text-black">Airpod pro (second generation)</h5>
                            <p className="text-gray-600 absolute">best fake Airpod in market that you can find</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <div>
                        <img src={slideimg2} class="d-block w-100 mt-10" alt="iphone" />
                        </div>
                        <div class="carousel-caption d-none d-md-block z-10 absolute">
                            <h5 className="text-black">Airpod pro (second generation)</h5>
                            <p className="text-gray-600 absolute">best fake Airpod in market that you can find</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={slideimg3} class="d-block w-100 mt-20" alt="speaker" />
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div> */}

        <div className="thisIsSwiper xl:col-span-7 2xl:col-span-7 lg:col-span-8 w-full my-auto bg-[#BBC2E2] rounded-lg 2sm:col-span-12 md:col-span-12 sm:col-span-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            modules={[Keyboard, Pagination, Navigation, Autoplay]}
            className="mySwiper  "
          >
            <SwiperSlide>
              <a href="#airpod">
              <div className="mx-16 py-24 block md:flex items-center justify-between gap-8">
                <div className="">
                  <img src={slideimg2} alt="" className="w-full h-full scale-150 2sm:scale-100" />
                </div>
                <div className="mt-6 ">
                  <h2 className="text-[21px] leading-8 font-medium ">Air pods(second generation)</h2>
                  <p className="font-normal text-[17px] leading-7 text-[#707070]">
                    The best fake product for buying and reselling on other platform with good profit
                  </p>
                </div>
              </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#Iphone">
              <div className="mx-16 py-24 block md:flex items-center justify-between gap-8">
                <div className="">
                  <img src={slideimg2} alt="" className="w-full h-full scale-150" />
                </div>
                <div className="mt-6 ">
                  <h2 className="text-[21px] leading-8 font-medium ">Air pods(second generation)</h2>
                  <p className="font-normal text-[17px] leading-7 text-[#707070]">
                    The best fake product for buying and reselling on other platform with good profit
                  </p>
                </div>
              </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#earbuds">
              <div className="mx-16 py-24 block md:flex items-center justify-between gap-8">
                <div className="">
                  <img src={slideimg2} alt="" className="w-full h-full scale-150" />
                </div>
                <div className="mt-6 ">
                  <h2 className="text-[21px] leading-8 font-medium ">Air pods(second generation)</h2>
                  <p className="font-normal text-[17px] leading-7 text-[#707070]">
                    The best fake product for buying and reselling on other platform with good profit
                  </p>
                </div>
              </div>
              </a>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Head;

/*
    background: #CFCCD6;
background: #BBC2E2;
background: #B7B5E4;
background: #847979;
background: #322E18;

*/
