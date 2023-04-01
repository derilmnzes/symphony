import Image from "next/image";
import logo from "../../../public/logo.png";
import logo2 from "../../../public/logo (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Layout = ({ children }) => {
  return (
    <>
      <header className="w-full fixed left-0 right-0 p-5 z-50 max-w-screen-xl m-auto bg-white">
        <div className="w-full flex flex-row items-center justify-between">
        <div className="w-80 hidden sm:block">
            <Image src={logo} className="w-full h-full" />
          </div>
          <div className="w-10 sm:hidden">
            <Image src={logo2} className="w-full h-full" />
          </div>

          <ul className=" flex-row justify-between items-center w-2/5 hidden sm:flex">
            <li className="cursor-pointer"><FontAwesomeIcon icon={faPhone} />  +918390211188</li>
            <li className="cursor-pointer">
            <FontAwesomeIcon className="mx-1"  icon={faWhatsapp} />
            Whatsapp
          </li>
          <li className="cursor-pointer">
          <a href="mailto:symphonycoatings80@gmail.com">
            <FontAwesomeIcon  className="mx-1" icon={faEnvelope} />
          <span className="text-sm">
          symphonycoatings80@gmail.com
          </span>
           </a>
          </li>
          </ul>
          <div className="block lg:hidden" >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
        </div>
      </header>
      {children}

      <footer className="w-full max-w-screen-xl m-auto p-5 bg-white flex flex-row items-start  justify-between">
        <div>
        <div className="w-80 hidden">
            <Image src={logo} className="w-full h-full" />
          </div>
          <div className="w-10">
            <Image src={logo2} className="w-full h-full" />
          </div>
        </div>

        <div>
          <h4 className="font-bold">Social Media</h4>
          <ul>
          <li>
          <FontAwesomeIcon className="mx-1" icon={faFacebook}  />
          Facebook
          </li>
          <li className="my-5">
            <FontAwesomeIcon className="mx-1"  icon={faInstagram} />
            Instagram
          </li>
          <li>
            <FontAwesomeIcon className="mx-1"  icon={faWhatsapp} />
            Whatsapp
          </li>
          </ul>
        </div>

        <div className="flex flex-col">
        <h4 className="font-bold">Contact us</h4>
        <ul  className="flex flex-col">
          <li className="my-2">
          <a href="tel:+918390211188">
            <FontAwesomeIcon  className="mx-1" icon={faPhone} />
            +918390211188
            </a>
          </li>
          <li className="my-2">
          <a href="tel:+9652535335">
            <FontAwesomeIcon  className="mx-1" icon={faPhone} />
            +9652535335
            </a>
          </li>
          <li className="my-2">
          <a href="mailto:symphonycoatings80@gmail.com">
            <FontAwesomeIcon  className="mx-1" icon={faEnvelope} />
          <span className="text-sm">
          symphonycoatings<br/>80@gmail.com
          </span>
           </a>
          </li>
        </ul>
        </div>
      </footer>
    </>
  );
};
