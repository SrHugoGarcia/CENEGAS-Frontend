import { DocumentCheckIcon } from "@heroicons/react/20/solid";
import servidorAxios from "../../config/servidorAxios";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Alerta from "../../components/Alerta";

export default function CheckPassword() {
  const params = useParams();
  const { token } = params;
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [alerta, setAlerta] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([contraseña, confirmarContraseña].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
        statusPage: false,
      });
      return;
    }
    if (contraseña !== confirmarContraseña) {
      setAlerta({
        msg: "Las contraseñas no coinciden",
        error: true,
        statusPage: false,
      });
      return;
    }
    if (contraseña.length < 8) {
      setAlerta({
        msg: "La contraseña debe de tener como minimo 8 caracteres",
        error: true,
        statusPage: false,
      });
      return;
    }
    setAlerta({});
    try {
      const respuesta = await servidorAxios.patch(
        `/users/restablecerPassword/${token}`,
        { contraseña, confirmarContraseña }
      );
      setAlerta({
        msg: "La contraseña se ha actualizado correctamente",
        error: false,
        statusPage: false,
      });
      setContraseña("");
      setConfirmarContraseña("");
    } catch (err) {
      if (err.response.data.status === "fail")
        setAlerta({
          msg: err.response.data.message,
          error: true,
          statusPage: true,
        });
    }
  };
  const { msg } = alerta;

  return (
    <>
      <div className="relative bg-gradient-to-r from-indigo-200 to-indigo-400">
        <img
          className="absolute inset-0 h-full w-full object-cover blur-sm opacity-20"
          src="https://images.unsplash.com/photo-1637607698829-de4171988e79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="fondo"
        />
        <div class="h-screen relative">
          <div className="flex min-h-full items-center justify-center sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
              {/* Este es el comienzo de div blanco */}
              <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-6 px-3 shadow sm:rounded-lg sm:px-10">
                  <div className="grid grid-row-3 gap-3">
                    <div>
                      {/* <img
                        className="mx-auto h-12 w-auto"
                        src="https://imgur.com/fWWekZ9.png"
                        alt="Your Company"
                      /> */}
                      <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                        {`${
                          alerta.statusPage
                            ? "El token no existe, no puedes realizar esta acción."
                            : "¡Estas a un paso!"
                        } `}
                      </h2>
                      <p className="mt-1  text-center text-sm text-gray-600">
                        {`${
                          alerta.statusPage
                            ? "Es posible que tu token haya expirado,"
                            : "Recupera tú contraseña,"
                        } `}
                        <span className="font text-indigo-500">
                          {`${
                            alerta.statusPage
                              ? "intentalo de nuevo."
                              : "recuerda utilizar numeros y caracteres especiales."
                          } `}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm"></div>
                    </div>
                  </div>
                  <div className="mt-4">
                    {msg && <Alerta alerta={alerta} />}
                  </div>
                  <form onClick={handleSubmit} className="mt-4 space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Contraseña
                      </label>
                      <div className="mt-1">
                        <input
                          id="contraseña"
                          name="contraseña"
                          type="password"
                          autoComplete="contraseña"
                          value={contraseña}
                          onChange={(e) => setContraseña(e.target.value)}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirmar contraseña
                      </label>
                      <div className="mt-1">
                        <input
                          id="checkPassword"
                          name="checkPassword"
                          type="password"
                          autoComplete="checkPassword"
                          value={confirmarContraseña}
                          onChange={(e) =>
                            setConfirmarContraseña(e.target.value)
                          }
                          className="block w-full appearance-none rounded-md border border-gray-300 px-2 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center"></div>

                      <div className="text-sm">
                        <a
                          href="/forgot-password"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Volver al inicio
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Resetear contraseña
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
      {/* <div className="w-full max-w-md">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://imgur.com/fWWekZ9.png"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
                {`${
                  alerta.statusPage
                    ? "El token no existe, no puedes realizar esta acción."
                    : "¡Estas a un paso!"
                } `}
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                {`${
                  alerta.statusPage
                    ? "Es posible que tu token haya expirado,"
                    : "Recupera tú contraseña,"
                } `}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  {" "}
                  {`${
                    alerta.statusPage
                      ? "intentalo de nuevo."
                      : "recuerda utilizar numeros y caracteres especiales."
                  } `}
                </a>
              </p>
            </div>
            <div className="pt-8"> {msg && <Alerta alerta={alerta} />}</div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Correo electronico
                  </label>
                  <input
                    id="contraseña"
                    name="contraseña"
                    type="password"
                    autoComplete="contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                    placeholder="Nueva contraseña"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="confirmarContraseña"
                    name="confirmarContraseña"
                    type="password"
                    autoComplete="confirmarContraseña"
                    value={confirmarContraseña}
                    onChange={(e) => setConfirmarContraseña(e.target.value)}
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                    placeholder="Confirma contraseña"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <DocumentCheckIcon
                      className="h-5 w-5 text-blue-700 group-hover:text-blue-800"
                      aria-hidden="true"
                    />
                  </span>
                  Guardar Cambios
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center"></div>
                <div className="text-sm">
                  <a
                    href="/"
                    className="font-medium text-gray-600 hover:text-gray-700"
                  >
                    Ir a la pagina principal
                  </a>
                </div>
              </div>
            </form>
          </div> */}
    </>
  );
}
