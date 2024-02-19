import { Link } from "react-scroll";
import { FaHome, FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import img from '../assets/logo.png';
import { RiHomeWifiFill } from "react-icons/ri";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FcServices } from "react-icons/fc";
import { SiOpenproject } from "react-icons/si";
import { FcBusinessContact } from "react-icons/fc";

const Nav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const handleItemClick = () => setClick(false);

    const content = (
        <div className="lg:hidden block absolute top-15 w-full left-0 right-0 bg-blue-100 transition font-semibold">
            <ul className="text-center testxl p-8">
                <Link spy={true} smooth={true} to="Home" onClick={handleItemClick}>
                    <li className="my-2 py-2 ml-0 hover:bg-slate-800 hover:rounded hover:shadow-md cursor-pointer">
                        <FaHome className="inline-block mr-2" />
                        Home
                    </li>
                </Link>
                <Link spy={true} smooth={true} to="About" onClick={handleItemClick}><li className="my-2 py-2 ml-0 hover:bg-slate-800 hover:rounded hover:shadow-md cursor-pointer"><IoInformationCircleSharp className="inline-block mr-2" />About</li></Link>
                <Link spy={true} smooth={true} to="Services" onClick={handleItemClick}><li className="my-2 py-2 ml-0 hover:bg-slate-800 hover:rounded hover:shadow-md cursor-pointer"><FcServices className="inline-block mr-2" />Services</li></Link>
                <Link spy={true} smooth={true} to="Projects" onClick={handleItemClick}><li className="my-2 py-2 ml-0 hover:bg-slate-800 hover:rounded hover:shadow-md cursor-pointer"><SiOpenproject className="inline-block mr-2" />Projects</li></Link>
                <Link spy={true} smooth={true} to="Contact" onClick={handleItemClick}><li className="my-2 py-2 ml-0 hover:bg-slate-800 hover:rounded hover:shadow-md cursor-pointer"><FcBusinessContact className="inline-block mr-2" />Contact</li></Link>
            </ul>
        </div>
    );

    return (
        <nav className="bg-yellow-100 sticky top-0 z-50">
            <div className="h-10vh flex justify-between text-blue-900 lg:py-2 px-4 py-2 border-b border-slate-800">
                <div className="flex items-center flex-1">
                    <a href="/" className="cursor-pointer">
                        <img src={img} width={40} height={20} alt="" />
                    </a>
                    <span className="ml-2 text-sm font-bold">Repository Juncture Resource Infinity</span>
                </div>
                <div className="lg: flex md:flex lg:flex1 items center justify-end font-bold hidden">
                    <div className="flex-20">
                        <ul className="flex gap-12 text-sm">
                            <Link spy={true} smooth={true} to="Home" onClick={handleItemClick}>
                                <li className="ml-0 hover:text-fuchsia-600 transition hover:shadow-md cursor-pointer">
                                    <RiHomeWifiFill className="inline-block mr-2" />
                                    Home
                                </li>
                            </Link>
                            <Link spy={true} smooth={true} to="About" onClick={handleItemClick}><li className="ml-0 hover:text-fuchsia-600 transition hover:shadow-md cursor-pointer">
                                    <IoInformationCircleSharp className="inline-block mr-2" />
                                About
                                </li>
                            </Link>
                            <Link spy={true} smooth={true} to="Services" onClick={handleItemClick}><li className="ml-0 hover:text-fuchsia-600 transition hover:shadow-md cursor-pointer">
                                <FcServices className="inline-block mr-2" />
                                Services
                                </li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects" onClick={handleItemClick}><li className="ml-0 hover:text-fuchsia-600 transition hover:shadow-md cursor-pointer">
                                <SiOpenproject className="inline-block mr-2" />
                                Projects</li></Link>
                            <Link spy={true} smooth={true} to="Contact" onClick={handleItemClick}><li className="ml-0 hover:text-fuchsia-600 transition hover:shadow-md cursor-pointer">
                                <FcBusinessContact className="inline-block mr-2" />
                                Contact</li></Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    );
};

export default Nav;
