import { Outlet } from "react-router-dom";
import {
  AcademicCapIcon,
  DocumentTextIcon,
  UserCircleIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import Informacion from "../components/record/Informacion";

const navigation = [
  {
    name: "Información personal",
    href: "/dashboard/generar-constancia",
    icon: UserCircleIcon,
    current: true,
  },
  {
    name: "Información del curso",
    href: "/dashboard/generar-constancia/02",
    icon: DocumentTextIcon,
    current: false,
  },
  {
    name: "Información del capacitador",
    href: "/dashboard/generar-constancia/03",
    icon: AcademicCapIcon,
    current: false,
  },
  {
    name: "Anexos",
    href: "/dashboard/generar-constancia/04",
    icon: DocumentIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FormularioLayout = () => {
  return (
    <>
      <Informacion />
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
          <nav className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white"
                    : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                  "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}>
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-indigo-500 group-hover:text-indigo-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default FormularioLayout;
