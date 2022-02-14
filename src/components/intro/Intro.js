import React from "react";
import "./Intro.css";
import Me from "../../img/my-photo1.JPG";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, welcome to my portfolio!</h2>
          <h2 className="i-intro">My name is</h2>
          <h1 className="i-name">Smriti Gurung</h1>
          <h3 className="intro-title">
            Aspiring Software Engineer in the Bay Area
          </h3>
          <p className="i-desc">
            When I started learning a programming language for the first time,
            it felt like magic. I was very fascinated to see how we can make a
            difference in the world with our coding skills and I think that's
            the beauty of it.
          </p>
          <p className="i-desc">
            Back in my home country Nepal, I had minimal access to such great
            technological resources. So, I was eager to learn more and hone my
            programming skills. Therefore, I enrolled in college in California
            and started pursuing my dream of becoming a great Software Engineer.
            I aim to bring significant positive changes in the community through
            my programming skills.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <img src={Me} alt="" className="intro-img" />
      </div>
    </div>
  );
}

export default Intro;
