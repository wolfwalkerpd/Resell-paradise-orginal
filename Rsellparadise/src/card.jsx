import { useState } from 'react'
import React from 'react'
import ProductPage from './product-page/productPage';
import {Link} from 'react-router-dom'

// function Card() {
//     return (
//         <>
const Card = (props) => {
  const {name, price, img, sale,id, getitemid} = props;
            return (
                // <Link to={`/Product/${id}`} onClick={()=>{getitemid(id);}}>
                <Link to="/Product">
                <div className=" mr-5 mt-3 bg-[#B7B5E4] px-3 rounded-lg pt-3 card-item w-48 pb-3 cursor-pointer">
                {/* <div className=" mt-3 bg-[#B7B5E4] rounded-lg pt-3"> */}
                <div>
                    <img src={img} className=" h-40 " />
                </div>
                <div className=" mt-2 relative">
                    <span>{sale}</span>
                    <h2 className="text-[15px]text-center mb-2">{name}</h2>
                    <span className=" text-2xl mt-1">{price}$</span>
                    <Link
                        to="/Pay"
                        alt=""
                        className=" absolute border p-1 px-2 rounded-xl decoration-transparent right-0 buy-btn">
                        Buy
                    </Link>
                </div>
            </div>
            </Link>
            );
};
//         </>
//     )
// }

export default Card
