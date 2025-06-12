import "./Global.css";
import Profile from "./assets/Testimonial/Profile Picture.png";
import Profile2 from "./assets/Testimonial/Profile Picture (1).png";
import Mark from "./assets/Testimonial/“ ”.png";

function Testimonials() {
  return (
    <section className="flex justify-center py-30">
      <div className="container">
        <div className="testi-wrap flex justify-evenly">
          <div className="">
            <h1 className="text-3xl font-semibold">Testimonials</h1>
            <div className="card-main flex justify-evenly pt-10 gap-10">
              <div className="card flex gap-12">
                <div className="img-profile">
                  <img src={Profile} alt="" />
                </div>
                <div className="card-desc w-[400px] h-auto">
                  <img src={Mark} alt="" className="pb-10" />
                  <h3 className="font-semibold border-b-1 border-[#A3A3A3] pb-4 text-xl">
                    Really happy with the product and kind services provided by
                    Cofile. Will recommend it to the world!
                  </h3>
                  {/* <hr className=" border-[#A3A3A3]"/> */}
                  <h5 className="py-4">Ashley Rock</h5>
                  <h3 className="text-[#A3A3A3] text-lg">Founder of Paple</h3>
                </div>
              </div>
              <div className="card flex gap-12">
                <div className="img-profile">
                  <img src={Profile2} alt="" />
                </div>
                <div className="card-desc w-[400px] h-auto">
                  <img src={Mark} alt="" className="pb-10" />
                  <h3 className="font-semibold border-b-1 border-[#A3A3A3] pb-4 text-xl">
                    Top class product and services! Since my first sign up, they
                    helped my team a lot.
                  </h3>
                  {/* <hr className=" border-[#A3A3A3]"/> */}
                  <h5 className="py-4">Natalie Bloom</h5>
                  <h3 className="text-[#A3A3A3] text-lg">
                    Marketing of Simpage
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
