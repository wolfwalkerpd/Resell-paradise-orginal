import React from "react";
import { Link } from "react-router-dom";

function Navlogin() {
  return (
    <section>
      <div className=" columns-2 my-3 mx-3">
        <Link to="/">
          <h1 className=" text-2xl ml-4">
            resellparadise<i class="las la-tag tag-flip"></i>
          </h1>
        </Link>
        <div className="mr-4 text-right">
          <Link to="/login" className=" rounded-lg text-xl px-3 py-2 text-[#8393DA]">
            login
          </Link>
          <Link
            to="/sign"
            className=" rounded-lg text-xl px-3 py-2 bg-[#8393DA] text-white">
            sign up
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Navlogin;
