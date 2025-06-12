import "./Global.css";
import Geet from "./assets/get-in.png";
import Get1 from './assets/hero/App Store.png'
import Get2 from './assets/hero/Google Play.png'

function Get() {
  return (
    <section className="flex justify-center py-30">
      <div className="container">
        <div className="get-wrap flex justify-evenly">
          <div className="get-header">
            <h1 className="text-4xl font-semibold pb-4">Get it Now</h1>
            <p className="text-[#A3A3A3] text-lg pb-13">
              Monitor your worldwide business <br /> with this handy apps
            </p>
            <div className="get-img-header">
                <img src={Get1} alt="" className="pb-3"/>
                <img src={Get2} alt="" />
            </div>
          </div>
          <div className="get-img">
            <img src={Geet} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Get;
