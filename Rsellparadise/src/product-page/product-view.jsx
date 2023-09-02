import React from "react";
import { ReactDOM,useState,useEffect } from "react";
import {Link} from "react-router-dom"
import Navnormal from "../nav-normal";
function Product (){
    const [add,Setadd ] =useState(1);
    let subt =()=>{
        if (add >1){
        Setadd(add-1);
        }
    }
    const addition =()=>{
        Setadd(add+1);
    }

    return(
        <section>
                <Navnormal />
            <section className="2xl:inline-flex xl:inline-flex lg:inline-flex md:block sm:block 2sm:block">
                <div className="bg-[#BBC2E2] p-14 mt-5 2xl:mx-10 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-3 2sm:mx-3 rounded-lg">
                    <img src="img/1.png" alt="this is an airpod" className=" ml-auto mr-auto flex w-max self-center" />
                </div>
                <div className=" mt-5 md:mx-14 2sm:mx-5">
                    <div>
                        <span className=" text-xl 2sm:text-[23px] 2sm:leading-9">Airpods pro (second generation)</span>
                        <h2 className=" text-4xl text-[#828282] my-3">102$</h2>
                    </div>
                    <div className="w-auto h-automx-2">
                        <h3 className="inline text-2xl">select quantity</h3>
                        <div className="inline 2xl:ml-40 xl:ml-40 lg:ml-40 md:ml-[400px] sm:ml-[350px] 2sm:ml-[130px]">
                            <button className="border-2 px-1 outline-0 border-black" onClick={subt}><i class="las la-minus"></i></button>
                            <span className=" text-2xl mx-2">{add}</span>
                            <button className="border-2 px-1 outline-0 border-black" onClick={addition}><i class="las la-plus"></i></button>
                        </div>
                        <Link to="/Pay" className="block border-2 p-3 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[650px] sm:w-[600px] 2sm:w-[400px] rounded-xl border-black outline-0 mt-7 buy-btn-2">
                            Add to cart
                        </Link>
                    </div>
                </div>
            </section>
        </section>
        
    );
    
}

export default Product;