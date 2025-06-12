import "./Global.css";
import QnAIcon from "./assets/qna.png";

function QnA() {
  return (
    <section className="flex justify-center py-30">
      <div className="container">
        <div className="qna-wrap flex justify-evenly">
          <div className="qna-header">
            <img src={QnAIcon} alt="" className="pb-5" />
            <h1 className="text-4xl font-semibold">
              Frequently <br /> Asked Questions
            </h1>
          </div>
          <div className="qna-question">
            <div className="question flex text-2xl gap-3 border-b-1 border-[#DEDEDE] pb-6 pt-6">
                <i className="ai-triangle-right-fill"></i>
              <h1 className="text-3xl font-semibold">
                Is there any limitation for free <br /> plan?
              </h1>
            </div>
            <div className="question flex text-2xl gap-3 border-b-1 border-[#DEDEDE] pb-6 pt-6">
                <i className="ai-triangle-right-fill"></i>
              <h1 className="text-3xl font-semibold">
                What is the minimum <br /> specification to run the apps on <br /> Android or iOS?
              </h1>
            </div>
            <div className="question flex text-2xl gap-3 pt-6">
                <i className="ai-triangle-right-fill"></i>
              <h1 className="text-3xl font-semibold">
                Can I downgrade the plan?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QnA;
