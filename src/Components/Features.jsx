import "./Global.css";
import Icon from "./assets/features/Icon.png";
import Icon1 from "./assets/features/Icon (1).png";
import Icon2 from "./assets/features/Icon (2).png";

function Features() {
  return (
    <section className="flex justify-center py-30">
      <div className="container">
        <div className="features-wrap flex justify-center gap-15">
          <div className="card w-[300px]">
            <img src={Icon} alt="" />
            <h1 className="text-2xl sm:text-3xl font-semibold py-3">
              24 Hours Customer Service
            </h1>
            <p className="text-[#A3A3A3] text-lg">
              We respect your passion to run your business by always accompany
              you
            </p>
          </div>
          <div className="card w-[300px]">
            <img src={Icon1} alt="" />
            <h1 className="sm:text-3xl text-2xl font-semibold py-3">
              Currencies All Over The World
            </h1>
            <p className="text-[#A3A3A3] text-lg">
              Our complete and real-time currencies database will help your
              business
            </p>
          </div>
          <div className="card w-[300px]">
            <img src={Icon2} alt="" />
            <h1 className="sm:text-3xl text-2xl font-semibold py-3">
              Upgrade Once You Ready
            </h1>
            <p className="text-[#A3A3A3] text-lg">
              No worries, we always welcome you once you ready to upgrade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
