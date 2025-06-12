import "./Global.css";
import UseImg from './assets/use/Illustration.png'

function Use() {
  return (
    <section className="py-30 flex justify-center">
      <div className="container">
        <div className="use-wrap flex justify-evenly gap-10">
          <div className="use-header">
            <h1 className="text-3xl font-semibold pb-6">Easy to Use</h1>
            <p className="text-[#A3A3A3] text-lg">
              Our clean and intuitive design <br /> will help you operate the apps
              easily
            </p>
          </div>
          <div className="use-img scale-120">
            <img src={UseImg} alt="" className="w-full h-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Use;
