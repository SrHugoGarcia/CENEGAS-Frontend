import { Link, useParams } from "react-router-dom";
import servidorAxios from "../../config/servidorAxios";
import Alerta from "../../components/Alerta";
import { useEffect, useState } from "react";

const CheckAccount = () => {
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const checkAccount = async () => {
      try {
        const respuesta = await servidorAxios.get(`/users/confirmar/${id}`);
        console.log(respuesta);
        if ((respuesta.data.status = "successful")) {
          setAlerta({
            msg: "En hora buena ¡Tú tokes es valido!",
            error: false,
          });
        }
      } catch (erro) {
        setAlerta({
          msg: erro.response.data.message,
          error: true,
        });
      }
    };
    checkAccount();
  }, []);

  const { msg } = alerta;

  return (
    <>
      <div className="h-screen">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://imgur.com/fWWekZ9.png"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
                {`${
                  alerta.error
                    ? "Tuvimos un problema con tu token, la cuenta no fue verificada."
                    : "Tú cuenta fue verificada con exito, bienvenido."
                } `}
              </h2>
            </div>
            <div className="mt-10">{msg && <Alerta alerta={alerta} />}</div>
            <div className="flex min-h-full items-center justify-center py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={`${
                    alerta.error
                      ? "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      : "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z."
                  } `}
                />
              </svg>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
              {`${
                alerta.error
                  ? "¿Crees que se trata de un error?"
                  : "Ahora puedes "
              } `}
              <a
                href="/"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                {`${
                  alerta.error ? "Comunicate con soporte." : "Iniciar Sesión"
                } `}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckAccount;
