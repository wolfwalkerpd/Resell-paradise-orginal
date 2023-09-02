import React from "react";
function Cryptomethod(e) {
  let valueofcrypto = 0.15;
  const link = "bc5677gdygjrsqtzq2n0Pphub56gkkfjhx0wlh";
  return (
    <section className="bg-[#D3D8EF] py-7 sm:ml-[100px] md:ml-[150px] 2sm:w-[350px] sm:w-[400px] h-auto">
      <div className=" text-center">
        
        <div className="mb-3">
        <h2 className=" text-2xl mb-3">{valueofcrypto}BTC</h2>
          <span>bc5677gdygjrsqtzq2n0Pphub56gkkfjhx0wlh</span>
          <button
            type="button"
            onClick={() =>
              navigator.clipboard.writeText('bc5677gdygjrsqtzq2n0Pphub56gkkfjhx0wlh')
            }>
            <i class="las la-copy text-3xl"></i>
          </button>
        </div>
      </div>
      <div className="2sm:px-20 ">
        <img src="img/qr-code.png" alt="qr-code" />
      </div>
    </section>
  );
}
export default Cryptomethod;
