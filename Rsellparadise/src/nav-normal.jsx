import React from "react";
import {Link} from "react-router-dom"

function Navnormal(){
    return(
        <section>
            <div className=" columns-2 my-3 mx-3">
        <div>
          <Link to="/">
          <h1 className=" 2sm:text-xl sm:text-2xl ml-4">
            resellparadise<i class="las la-tag tag-flip"></i>
          </h1>
          </Link>
        </div>
        <div>
        <Link to="/Pay" className=""><h2 className=" text-right 2sm:text-xl sm:text-2xl">cart<i className="las la-shopping-cart"></i></h2></Link>
        </div>
      </div>
        </section>
    )
}
export default Navnormal