import "./Global.css";
import Up1 from "./assets/upgrade/Left.png";

function Upgrade() {
  return (
    <section className="flex justify-center py-30">
      <div className="container">
        <div className="upgrade-wrap flex flex-row-reverse justify-evenly gap-10">
          <div className="upgrade-header">
            <h1 className="text-3xl font-semibold pb-6">
              Upgrade <br /> When You Need
            </h1>
            <p className="text-[#A3A3A3] text-lg">
              We committed to provide the free plan forever. Once <br /> you need an
              upgrade, we will be there for you
            </p>
          </div>
          <div className="use-img scale-120">
            <img src={Up1} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Upgrade;
