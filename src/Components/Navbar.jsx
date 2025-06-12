import { useState, useEffect } from 'react'
import Logo from './assets/Logo.png'
import './Global.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    return(
        <header className={`bg-white shadow-md py-3 sticky top-0 right-0 left-0${isScrolled ? "" : ""}`}>
            <nav className='flex items-center justify-between px-4'>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className={`link-menu text-lg flex items-center gap-10 ml-auto px-5 
                    ${menuOpen ? "fixed top-18 left-0 right-0 flex flex-col bg-white py-30 shadow-md" : "hidden"}`}>
                    <a href="">Home</a>
                    <a href="" className='text-black/50'>About us</a>
                    <a href="" className='text-black/50'>Pricing</a>
                </div>
                    <div className="btn-nav">
                        <a href="" className='text-white bg-[#056EE9] py-2 px-5 rounded-full'>Download - $10</a>
                    </div>
                <button onClick={toggleMenu} className="hamburger space-y-2 px-4 py-2">
                    <span className={`${menuOpen ? "rotate-45 translate-y-2" : ""} flex bg-black w-7 h-[2px] rounded-full transition-all transform origin-center`}></span>
                    <span className={`${menuOpen ? "opacity-0" : ""} flex bg-black w-7 h-[2px] rounded-full transition-all transform origin-center`}></span>
                    <span className={`${menuOpen ? "-rotate-45 -translate-y-3" : ""} flex bg-black w-7 h-[2px] rounded-full transition-all transform origin-center`}></span>
                </button>
            </nav>
        </header>
    ) 
}


export default Navbar