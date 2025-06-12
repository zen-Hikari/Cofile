import './Global.css'
import Logo from './assets/Logo.png'

function Footer() {
    return(
        <footer className='bg-[#F5F5F5]'>
            <div className="footer-cont py-20 px-10">
                <div className="footer-nav pb-10 flex justify-between px-4 items-center">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="icon-footer text-3xl flex gap-5">
                        <i className="ai-instagram-fill"></i>
                        <i className="ai-twitter-fill"></i>
                        <i className="ai-dribbble-fill"></i>
                        <i className="ai-medium-fill"></i>
                    </div>
                </div>
                <div className="link-footer flex gap-8 text-xl pb-10">
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <a href="">Pricing</a>
                </div>
                <div className="footer-note">
                    <h5>Design by Masbobz Works | Code by ZenHikari</h5>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer