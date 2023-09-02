import React from "react";

function Methodpay(){
    return(
    <div className="">
        <div>
            <div>
            <h2 className="text-3xl text-black font-medium mb-3">how to pay?</h2>
          <div className="grid grid-cols-2 gap-1 col-span-2">
            <div className="col-span-1 bg-[#CFCCD6] p-10 rounded-md relative">
              <div>
              <p className=" text-white text-[33px] font-semibold">01</p>
              <p className=" text-base font-medium">
                Open ticket on our server
              </p>
              <i class="las la-external-link-alt absolute right-2 text-white bottom-2 text-3xl"></i>
              </div>
            </div>
            <div className="col-span-1 bg-[#B7B5E4] p-10 rounded-md relative">
              <div>
              <p className=" text-white text-[33px] font-semibold">02</p>
              <p className=" text-base font-medium">
                Open ticket on our server
              </p>
              <i class="las la-money-bill absolute right-2 text-white bottom-1 text-3xl"></i>
              </div>
            </div>
            <div className="col-span-2 bg-[#BBC2E2] p-10 rounded-md relative">
              <div>
              <p className=" text-white text-[33px] font-semibold">03</p>
              <p className=" text-base font-medium">
                Open ticket on our server
              </p>
              <i class="las la-check-circle absolute right-2 text-white bottom-1 text-3xl"></i>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
}

export default Methodpay;