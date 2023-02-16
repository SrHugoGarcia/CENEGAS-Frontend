import React from "react";
import "../../css/gradient.css";

const Card02 = () => {
  return (
    <div className="">
      <div className="w-full bg-[#f6f9fc]">
        <div className="py-24">
          <div className="mx-auto max-w-6xl">
            <h3 className="font-semibold text-[18px] mb-5 text-[#635BFF]">
              Plataforma unificada
            </h3>
            <div className="flex">
              <a className="group underline-text-animation-a basis-1/2 font-medium text-[38px] text-[#0A2540] leading-[2.75rem] my-3">
                <span className="underline-text-animation-span-to-r font-semibold">
                  Un solo paquete integrado de productos para pagos
                </span>
              </a>
            </div>
            <div className="flex">
              <p className="mt-5 basis-1/2 text-[18px] mr-5 text-[#425266]">
                Reunimos todo lo necesario para desarrollar sitios web y
                aplicaciones capaces de aceptar pagos y hacer transferencias en
                todo el mundo. Los productos de Stripe impulsan pagos para
                minoristas que operan en línea y en persona, empresas que
                trabajan con suscripciones, plataformas de software,
                marketplaces, y mucho más.
              </p>
              <p className="mt-5 basis-1/2 text-[18px] ml-5 text-[#425466]">
                También ayudamos a las empresas a combatir el fraude, enviar
                facturas, emitir tarjetas virtuales y físicas, reducir las
                fricciones durante la finalización de compra, obtener
                financiación, gestionar los gastos de la empresa, y muchas cosas
                más.
              </p>
            </div>
            <div className="flex mt-5">
              <div className="basis-1/4">
                <img
                  src="https://imgur.com/ZI1NiIb.png"
                  className="mt-5 h-10"
                />
                <p className="mt-5 text-[15px] mr-5 font-medium text-[#0A2540]">
                  <span className="text-[#635BFF] pr-2 font-extralight">|</span>
                  Prácticamente sin intermediarios
                </p>
                <p className="mt-5 text-[15px] mr-5 text-[#425266]">
                  Reunimos todo lo necesario para desarrollar sitios web y
                  aplicaciones capaces de aceptar pagos y hacer transferencias
                  en todo el mundo.
                </p>
              </div>
              <div className="basis-1/4">
                <img
                  src="https://imgur.com/KdyCWCJ.png"
                  className="mt-5 h-10"
                />
                <p className="mt-5 text-[15px] mr-5 font-medium text-[#0A2540]">
                  <span className="text-[#635BFF] pr-2 font-extralight">|</span>
                  La plataforma de evolución
                </p>
                <p className="mt-5 text-[15px] mr-5 text-[#425266]">
                  Reunimos todo lo necesario para desarrollar sitios web y
                  aplicaciones capaces de aceptar pagos y hacer transferencias
                  en todo el mundo.
                </p>
              </div>
              <div className="basis-1/4">
                <img
                  src="https://imgur.com/A88Hdrm.png"
                  className="mt-5 h-10"
                />
                <p className="mt-5 text-[15px] mr-5 font-medium text-[#0A2540]">
                  <span className="text-[#635BFF] pr-2 font-extralight">|</span>
                  Fiabilidad demostrada
                </p>
                <p className="mt-5 text-[15px] mr-5 text-[#425266]">
                  Reunimos todo lo necesario para desarrollar sitios web y
                  aplicaciones capaces de aceptar pagos y hacer transferencias
                  en todo el mundo.
                </p>
              </div>
              <div className="basis-1/4">
                <img
                  src="https://imgur.com/JE9I1N3.png"
                  className="mt-5 h-10"
                />
                <p className="mt-5 text-[15px] mr-5 font-medium text-[#0A2540]">
                  <span className="text-[#635BFF] pr-2 font-extralight">|</span>
                  Optimizaciones inteligentes
                </p>
                <p className="mt-5 text-[15px] mr-5 text-[#425266]">
                  Reunimos todo lo necesario para desarrollar sitios web y
                  aplicaciones capaces de aceptar pagos y hacer transferencias
                  en todo el mundo.
                </p>
              </div>
            </div>
            <button className="mt-5 bg-[#635BFF] button duration-500 px-4 py-1 rounded-full hover:bg-black hover:duration-500">
              <span className="text-white text-[15px]">Conocer planes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card02;
