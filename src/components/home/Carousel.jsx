import { Tab } from "@headlessui/react";
import clsx from "clsx";

const features = [
  {
    name: "Business",
    image: "https://imgur.com/0gQvt8W.png",
    color: "bg-[#bf40a2]",
    text: "text-[#bf40a2]",
    font: "Lyft tiene más de 700,000 conductores que realizan casi un millón de viajes al día. Usamos Stripe para impulsar pagos a escala. Además, nos asociamos a Stripe para crear Express Pay, la primera función de su clase que permite a los conductores cobrar al instante cuando lo desean.",
    boton: "Más información sobre nuestros usuarios",
  },
  {
    name: "Associate",
    image: "https://imgur.com/0gQvt8W.png",
    color: "bg-[#611f69]",
    text: "text-[#611f69]",
    boton: "Más información sobre nuestros usuarios",
    font: "Dado el rápido crecimiento de Slack, el uso de Stripe nos ayuda a escalar pagos fácilmente, ya que permite tanto recibir pagos de usuarios de todo el mundo como habilitar pagos ACH para clientes corporativos.",
  },
  {
    name: "Professional",
    image: "https://imgur.com/0gQvt8W.png",
    color: "bg-[#ff8284]",
    text: "text-[#ff8284]",
    boton: "Más información sobre nuestros usuarios",
    font: "Gracias a la confiabilidad de las herramientas para desarrolladores de Stripe, el equipo de ingeniería de Glossier puede concentrarse en las experiencias de los clientes y los productos.",
  },
];

function Feature({ feature, isActive, className }) {
  return (
    <div className="">
      <div className={clsx(className, "opacity-75 hover:opacity-100")}>
        <div
          className={("flex", isActive ? "text-[#0A2540]" : "text-slate-400")}
        >
          {feature.name}
        </div>
      </div>
    </div>
  );
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <img
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-7 lg:block">
      {({ selectedIndex }) => (
        <>
          <div className="flex">
            {features.map((feature, featureIndex) => (
              <Tab.Panel key={feature.name} className="py-5 w-full">
                <div
                  className={`mx-auto max-w-6xl overflow-hidden rounded-xl ${feature.color} shadow-lg shadow-black/10`}
                >
                  <div className="flex">
                    <div className="basis-1/2">
                      <p className="text-white text-[18px] mt-14 mx-12 mb-7">
                        {feature.font}
                      </p>
                      <button className="mx-10 mb-14 bg-white button duration-500 px-4 py-1 rounded-full hover:bg-white hover:opacity-60 hover:duration-500">
                        <span className={`${feature.text} text-[15px]`}>
                          {feature.boton}
                        </span>
                      </button>
                    </div>
                    <div className="basis-1/2">
                      <h1></h1>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </div>
          <div className="flex">
            <div className="flex my-3 max-w-6xl mx-auto outline-0">
              {features.map((feature, featureIndex) => (
                <Feature
                  className="mx-5"
                  key={feature.name}
                  feature={{
                    name: (
                      <Tab className="font-bold outline-none">
                        {feature.name}
                      </Tab>
                    ),
                  }}
                  isActive={featureIndex === selectedIndex}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </Tab.Group>
  );
}

export function Carousel() {
  return (
    <section>
      <div className="w-full bg-white">
        <div className="py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex">
              <a className="group underline-text-animation-a basis-7/12 font-medium text-[38px] text-[#0A2540] leading-[2.75rem] my-3">
                <span className="underline-text-animation-span-to-r font-semibold">
                  Stripe es la empresa líder según el informe The Forrester
                  Wave™ de proveedores de servicios de pago para comerciantes
                  del 2º trimestre de 2022
                </span>
              </a>
            </div>
            <div className="flex">
              <div className="mt-5 basis-2/4 text-[18px] mr-10 text-[#425266]">
                <div>
                  Stripe fue reconocida como la «mejor opción para las equipos
                  de pago basados en la tecnología...» y recibió la puntuación
                  más alta en la categoría Estrategia.
                </div>
                <div>
                  <button className="mt-7 bg-[#635BFF] button duration-500 px-4 py-1 rounded-full hover:bg-black hover:duration-500">
                    <span className="text-white text-[15px]">
                      Leer el informe
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-5 basis-1/4 text-[15px] ml-[70px] text-[#425466]">
                <div className="text-[24px] text-[#635BFF] font-semibold">
                  <span className="text-[#635BFF] pr-4 font-extralight">|</span>
                  5 / 5
                </div>
                Puntuación en la categoría Estrategia
              </div>
              <div className="mt-5 basis-1/4 text-[15px] ml-[70px] text-[#425466]">
                <div className="text-[24px] text-[#635BFF] font-semibold">
                  <span className="text-[#635BFF] pr-4 font-extralight">|</span>
                  16
                </div>
                Criterios con la puntuación más alta posible
              </div>
            </div>
            <FeaturesMobile />
            <FeaturesDesktop />
          </div>
        </div>
      </div>
    </section>
  );
}
