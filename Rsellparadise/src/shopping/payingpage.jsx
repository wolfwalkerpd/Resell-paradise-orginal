import React from "react";
import { useState } from "react";
import CardWide from "./cardWide";
import Footer from "../footer";
import Methodpay from "./paymethod"
import Navnormal from "../nav-normal";
import './payingpage.css';
import Cryptomethod from "./cryptomethod";
import Payform from "./payform"
import Cryptoform from "./cryptoform";

function Paying() {

   const [ cryptopaymentFlag, setCryptoPaymentFlag] = useState(true);
   const [ otherpaymentFlag, setOtherpaymentFlag] = useState(false);
  const paying =()=>{
    if(cryptopaymentFlag == true){
      return <Cryptomethod />
    }
    else{
      return <Methodpay />
    }
  }
  const formoption =()=>{
    if(cryptopaymentFlag == true){
      return <Cryptoform />
    }else{
      return <Payform />
    }
  }

  return (
    <section className="">
      <Navnormal />
      <div className="px-8">

        <div className="mt-12">
          <div>
            <h2 className=" text-[41px] font-semibold">username</h2>
          </div>
          <div className=" flex items-start justify-start ">
            <div className=" font-normal text-[28px] ">
              <div>
                <span>3 product</span>
              </div>
              <div>
                <span>cart code</span>
              </div>
            </div>
            <div className=" font-semibold text-[28px] ml-8">
              <div>
                <span>$360.00</span>
              </div>
              <div>
                <span>AF5GF</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:flex sm:block items-start justify-between my-40">
          <div className="form flex-row">
            {/* ----------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------- */}

            <form className=" form 2xl:w-[780px] xl:w-[600px] lg:w-[500px] md:w-[400px]">
              <div class="space-y-12">
                <div class="">
                  <h2 class="text-[33px] font-medium abc">Shipping options</h2>

                  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="col-span-3">
                      <div class="mt-3">
                        <button class=" border px-3 py-2 border-gray-900 w-full rounded-md text-gray-300" type="button">Home<i class="las la-home"></i></button>
                      </div>
                    </div>
                    <div class="col-span-3">
                      <div class="mt-3">
                        <button class=" border py-2 border-gray-900 w-full rounded-md text-gray-300" type="button">Express<i class="las la-fire-alt"></i></button>
                      </div>
                    </div>
                    <div class="col-span-3">
                      <div class="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          placeholder="Name"
                          class="block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 py-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="2sm:col-span-3">
                      <div class="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          placeholder="Surname"
                          class="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="2sm:col-span-3 sm:col-span-full">
                      <div class="mt-2">
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          placeholder="Adress"
                          class="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="2sm:col-span-3 sm:col-span-2 sm:col-start-1">
                      <div class="mt-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Postal code"
                          class="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="mt-2">
                        <input
                          type="text"
                          name="region"
                          id="region"
                          placeholder="City"
                          class="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="mt-2">
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          placeholder="Country"
                          class="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-span-full">
                <div class="mt-10">
                  <input
                    type="email"
                    name="street-address"
                    id="street-address"
                    placeholder="E-mail"
                    class="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <div class="mt-10">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    placeholder="Phone number"
                    class="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </form>

            {/* ----------------------------------------------------------------------------------------- */}
            {/* ----------------------------------------------------------------------------------------- */}
          </div>
          <div className="">
            <h2 class="text-[33px] font-medium mb-10">cards</h2>
            <CardWide />
            <CardWide />
          </div>
        </div>
          
        
        <div className="flex 2sm:block lg:columns-2 2sm:columns-1 items-start justify-start mx-3 gap-x-32 mb-12">
          <div className=" ">
            <h2 className="text-[33px] font-medium mb-4">payment</h2>
            <div className="mb-3">
              {/* ========================================== */}
              <div className=" flex gap-4">
                <div className={cryptopaymentFlag ? 'setPaymentFlagActive' : 'setPaymentFlagPassive'} onClick={() => {setCryptoPaymentFlag(!cryptopaymentFlag)& setOtherpaymentFlag(!otherpaymentFlag)}}>
                  crypto
                </div>
                <div className={!otherpaymentFlag ? 'setPaymentFlagPassive' : 'setPaymentFlagActive'} onClick={() => {setOtherpaymentFlag(!otherpaymentFlag) &setCryptoPaymentFlag(!cryptopaymentFlag)}}>
                  other
                </div>
              </div>
            </div>
            {formoption()}
          </div>

      {/* <div>
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
      </div> */}
      {paying()}
      </div>
      </div>
      <Footer />
    </section>
  );
}
export default Paying;
