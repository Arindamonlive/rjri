import {AiFillGithub} from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
const Footer =() => {
    return (
        <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">
                        Logo
                    </span>
                    <p className="text-[16px] my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, dolores?</p>
                </div>
                <div className="">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
                        Services
                    </h2>
                    <ul className="text-[16px] my-4">
                            <li className='my-2'>Web Design</li>
                            <li className='my-2'>Web Development</li>
                            <li className='my-2'>SEO</li>
                            <li className='my-2'>E-Comerce</li>
                        </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase ">Contact</h2>
                    <p className="text-[16px] my-4">Email: youremail@gmail.com</p>
                    <p className="text-[16px] my-4">Phone: +1111111111111</p>
                </div>
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow me
                <div className="flex space-x-4">
                            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://github.com/Arindamonlive" >
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" >
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://twitter.com/arindamckbt" >
                                <FiTwitter className="text-[28px]"/>
                            </a>
                            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://www.instagram.com/arindam_atjoy/" >
                                <FaInstagram className="text-[28px]"/>
                            </a>
                </div></h2>

            </div>
            <div className="text-white text-[20px] text-center mt-14">Copyright Information</div>
        </footer>
    )
}
export default Footer;