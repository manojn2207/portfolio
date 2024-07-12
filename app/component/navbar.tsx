import Link from "next/link";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { routes } from "../routes";
import '../styles/globals.css';
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-primary-dark text-white w-28 px-1">
      <div className="h-full flex flex-col">
       
        <div className="flex flex-col space-y-5 mx-1">
          {routes.map((route) => (
            <Link
              href={route.route}
              key={route.name}
              className={`px-1 py-2 rounded-xl ${
                pathname === route.route
                  ? " bg-primary-mid text-secondary-very_light hover:bg-primary-mid"
                  :  "bg-secondary-very_light text-primary-dark hover:bg-secondary-light "
              }`}>
              <div className="flex items-center justify-center">
              <Image 
              height={24}
              width={24}
              className={`${pathname === route.route?"svgWhite":""}`}
              src={route.img}
            alt="H"
          />
          </div>
              <div className="flex items-center justify-center font-bold text-sm">
            {route.name}
              </div>
            </Link>
          ))}
         
        </div>
      </div>
    </nav>
  );
}
