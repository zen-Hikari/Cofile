import "./Global.css";
import HeroImg from './assets/hero/Right.png'
import AppStore from "./assets/hero/App Store.png";
import GglStore from "./assets/hero/Google Play.png";

function Hero() {
  return (
    <section className="py-20 flex justify-center ">
      <div className="container ">
       <div className="hero-compt flex justify-evenly ">
         <div className="hero-header">
          <h1 className="font-semibold leading-normal">
            Check Currency <br /> Exchange Rate <br /> in Real Time
          </h1>
          <p className="text-[#A3A3A3] text-lg">
            Monitor your worldwide business <br /> with this handy apps
          </p>
          <div className="img-hero pt-20">
            <img src={AppStore} alt="" className="pb-[20px]"/>
            <img src={GglStore} alt="" />
          </div>
        </div>
        <div className="img-main scale-120 -z-10">
          <img src={HeroImg} alt="" className="w-full h-auto"/>
        </div>
       </div>
      </div>
    </section>
  );
}

export default Hero;
