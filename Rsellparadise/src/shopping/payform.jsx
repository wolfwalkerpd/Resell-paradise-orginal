import React from "react";
function Payform(){
    return(
    <div class="sm:col-span-3 mb-3">
    <label
      for="country"
      class="block text-sm font-medium leading-6 text-gray-900">
      Mothods
    </label>
    <div class="mt-2">
      <select
        id="country"
        name="country"
        autocomplete="country-name"
        className=" 2sm:w-full rounded-md border-0 border-black py-3 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  bg-white">
        <option className="text-lg">PayPal</option>
        <option className="text-lg">PayPal</option>
        <option className="text-lg">PayPal</option>
      </select>
      <span className="block text-[#4D4D4D] mb-3">
        *automatic payment available only with crypto
      </span>
    </div>
    <a
      className=" decoration-transparent border-2 border-[#7C78DA] text-[#7C78DA] py-2 px-9 text-[18px] rounded-lg hover:bg-[#7c78da] hover:text-white btn-shop block"
      href="">
      open ticket on discord to pay
    </a>
    <input type="text" name="form-text" className=" py-1 px-3 border-2 mt-3 w-full rounded-lg" placeholder="confirmation code"/>
    <input type="submit" name="form-submit" className=" rounded-lg py-1 px-3 w-full bg-[#7C78DA]  block text-white mt-3" value="confirm" />
  </div>
  )
}
export default Payform