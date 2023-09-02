import React from "react";
import "./sign.css";
import NavNormal from "../nav-normal";
import { Link } from "react-router-dom";
import Footer from "../footer";
import LoginL from "./login-l.png"

function Sign() {


  return (
    <section className=" bg-[#E9E9E9] p-7 w-full h-screen flex">
      <div className=" w-1/2 rounded-lg bg-white">
        <form>
          <div className="text-center pt-20">
            <span className=" text-5xl tag-sign"><i class="las la-tag"></i></span>
            <h2 className=" text-[48px] font-medium py-2">Get Started!</h2>
            <h4 className="font-normal text-[22px] text-[#5A5A5A]">please enter your details</h4>
          </div>
          <div className="px-4 mb-3">
            <div className="mt-4">
              <label className="block text-[19px] leading-7">Username</label>
              <input type="text" name="text-sign" className=" border-b-2 border-b-[#595959] text-[#595959] outline-none border-black w-full" />
            </div>
            <div className="mt-4">
              <label className="block text-[19px] leading-7">Email</label>
              <input type="Email" name="text-sign" className=" border-b-2 border-b-[#595959] text-[#595959] outline-none border-black w-full" />
            </div>
            <div className="mt-4">
              <label className="block text-[19px] leading-7">password</label>
              <input type="password" name="text-sign" className=" border-b-2 border-b-[#595959] text-[#595959] outline-none border-black w-full" />
            </div>
          </div>
          <span className="pl-5 block">Already have an acount? <Link className=" underline font-medium">Sign in</Link></span>
          <div className=" flex justify-center text-center py-4">
          <button className="leading-9 text-[25px] bg-black text-white px-52 py-3 rounded-full font-medium">Sign in</button>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <img src={LoginL} />
      </div>
    </section>
  );
}
export default Sign;
