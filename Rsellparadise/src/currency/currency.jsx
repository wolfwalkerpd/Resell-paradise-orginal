import React from "react";
function Currency(){
    return(
        <section className=" text-center justify-center items-center">
            <div className="mt-5">
                <button className=" bg-[#A29FEE] py-2 mr-5 px-4 rounded-lg text-white text-2xl">normal<i class="las la-home"></i></button>
                <span className="text-2xl ">selected</span>
            </div>
            <div className=" my-3">
                <input type="text" placeholder="Enter name" className="border-2 border-[#A29FEE] 2sm:w-[300px] sm:w-[400px] py-2 sm:ml-[80px] md:ml-[140px] rounded-lg px-3" />
            </div>
            <div className="border-2 2sm:w-[300px] sm:w-[400px] sm:ml-[160px] md:ml-[255px] 2sm:ml-[47px] lg:ml-[385px] 2xl:ml-[640px] py-2 px-3 border-black rounded-md">
                <div className=" flex">
                <h2 className=" text-2xl mr-32">crypto selected</h2>
                <span>USDT<i class="las la-angle-down"></i></span>
                </div>
                <div className="my-3">
                    <h2 className=" text-xl text-white bg-[#A29FEE] rounded-md text-left pl-3 py-2 mx-2 ">Bitcoin(BTC)</h2>
                </div>
                <div className="my-3">
                    <h2 className=" text-xl text-white bg-[#BBC2E2] rounded-md text-left pl-3 py-2 mx-2 ">Theter(USDT)</h2>
                </div>
                <div className="my-3">
                    <h2 className=" text-xl text-white bg-[#847979] rounded-md text-left pl-3 py-2 mx-2 ">Ethereum(ETH)</h2>
                </div>
                <div className="my-3">
                    <h2 className=" text-xl text-white bg-[#322E18] rounded-md text-left pl-3 py-2 mx-2 ">Ripple(XRp)</h2>
                </div>
            </div>
        </section>
    )
}
export default Currency