import {AiFillGithub} from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import img from '../assets/logo.png';
import AOS from'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";

const Banner =() => {
    useEffect(()=>{    
        AOS.init({
        easing:'eas-out-quart',
        delay:0,
        duration:750
    })
},[])

    return (
        <div id="Home" className="lg:px-56 px-10 lg:py-0 py-20 text-cneter gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className ="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
            <h1 data-aos="fade-right" className="text-[45px] font-semibold mb-8 leading-normal uppercase">
                <span className="" style={{ color: '#2C3594' }}>Welcome</span> 
                <span className="" style={{ color: '#0787CA' }}> To</span>
                <span className="" style={{ color: '#34BDDE' }}> Repository  </span> 
                <span className="" style={{ color: '#F6EE1F' }}>Juncture </span> 
                <span className="" style={{ color: '#F7941F' }}>Resource </span> 
                <span className="" style={{ color: '#EC0D8E' }}>Infinity </span>
                <br />
                <span className="" style={{ color: '#2C3594' }}>AKA <MdOutlineDoubleArrow className="" style={{ color: '#EC028C' }} /></span> 
                <span className="font-bold" style={{ color: '#34BDDE' }}> R</span> 
                <span className="font-bold" style={{ color: '#F6EE1F' }}> J</span> 
                <span className="font-bold" style={{ color: '#F7941F' }}> R</span> 
                <span className="font-bold" style={{ color: '#EC0D8E' }}> Infinity</span>
                </h1>
                <p data-aos="fade-left">
                <span className="font-bold" style={{ color: '#EC0D8E' }}> Code</span> 
                <span className="font-bold" style={{ color: '#F7941F' }}> Crafted</span>,
                <span className="font-bold" style={{ color: '#F6EE1F' }}> Solutions</span> 
                <span className="font-bold" style={{ color: '#34BDDE' }}> Infinite</span>
                    
                </p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/Arindamonlive" className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            {/* <a href="https://twitter.com/arindamckbt" className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2">
                                <FiTwitter className="text-[28px]"/>
                            </a> */}
                            <a href="https://www.instagram.com/arindam_atjoy/" className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2">
                                <FaInstagram className="text-[28px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className='' alt=""/>
        </div>
    )
}
export default Banner;