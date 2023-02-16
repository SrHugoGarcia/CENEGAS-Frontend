import { useState } from "react";

import { LockClosedIcon } from "@heroicons/react/20/solid";

import Alerta from "../../components/Alerta";
import servidorAxios from "../../config/servidorAxios";

export default function ForgotPassword() {
  const [correo, setCorreo] = useState("");
  const [alerta, setAlerta] = useState("");

  //  const complementoCorreo = ["@iktanst.com"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([correo].includes("")) {
      setAlerta({ msg: "Hay campos vacios", error: true });
      return;
    }
    /* if (correo.includes(complementoCorreo)) {
      const estadoCorreo = true;
      console.log(estadoCorreo);
    } else {
      setAlerta({
        msg: "El correo no cumple con las caracteristicas para continuar con la acción.",
        error: true,
      });
      return;
    }
    */
    try {
      const respuesta = await servidorAxios.post(`/users/olvidePassword`, {
        correo,
      });
      if (respuesta.data.status === "successful") {
        setAlerta({
          msg: "Las instrucciones se han enviado a tu correo",
          error: false,
        });
        setCorreo("");
      }
    } catch (err) {
      if (err.response.data.status === "fail")
        setAlerta({
          msg: err.response.data.message,
          error: true,
        });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="relative bg-gradient-to-r from-indigo-100 to-indigo-200">
        <img
          className="absolute inset-0 h-full w-full object-cover blur-sm opacity-[0.15]"
          src="https://images.unsplash.com/photo-1637607698829-de4171988e79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="fondo"
        />
        <div class="h-screen relative">
          <div className="flex min-h-full items-center justify-center sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
              {/* Este es el comienzo de div blanco */}
              <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="m-6">
                  <img
                    className="mx-auto h-12 w-auto"
                    src="https://imgur.com/O1aNdwN.png"
                    alt="Your Company"
                  />
                </div>
                <div className="bg-white py-6 px-3 shadow sm:rounded-lg sm:px-10">
                  <div className="grid grid-row-3 gap-3">
                    <div>
                      <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Recupera tú contraseña
                      </h2>
                      <p className="mt-1 text-center text-sm text-[#8CB873]">
                        Las instrucciones se enviaran a tú correo.
                      </p>
                    </div>

                    {/* Formas de logearse  */}

                    <div>
                      <a
                        href="registro"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Crear una cuenta</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                          />
                        </svg>

                        <div className="pl-3">Crear cuenta</div>
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">
                          O continua con la recuperación
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    {" "}
                    {msg && <Alerta alerta={alerta} />}
                  </div>
                  <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Correo electrónico
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={correo}
                          onChange={(e) => setCorreo(e.target.value)}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-[#8CB873] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#95c37b] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Recuperar contraseña
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
