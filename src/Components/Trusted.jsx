import "./Global.css";
import Icon1 from "./assets/icon/image1.png";
import Icon2 from "./assets/icon/image2.png";
import Icon3 from "./assets/icon/image3.png";
import Icon4 from "./assets/icon/image4.png";

function Trusted() {
  return (
    <section className="flex justify-center py-30">
      <div className="container">
        <div className="trusted-main flex justify-evenly">
          <div className="trusted-compt">
            <h1 className="text-3xl font-semibold pb-8">Trusted by</h1>
            <div className="icon-trusted flex gap-16">
              <img src={Icon1} alt="icon" className="w-50 h-auto" />
              <img src={Icon2} alt="icon" className="w-50 h-auto" />
              <img src={Icon3} alt="icon" className="w-50 h-auto" />
              <img src={Icon4} alt="icon" className="w-50 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
