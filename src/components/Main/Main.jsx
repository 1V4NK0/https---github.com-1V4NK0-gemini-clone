import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, ivanko.</span>
              </p>
              <p>How can I help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  What`s the difference between deep learning and machine
                  learning?
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Can you help me write a poem about autumn?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>How does blockchain technology work?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>How do cryptocurrencies like Bitcoin ensure security?</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
             {input && <img onClick={() => onSent()} src={assets.send_icon} alt="" />} 
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info. Double check important
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
