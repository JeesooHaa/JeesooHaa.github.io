import React from "react";

const About = () => {
  return (
    <div className="page" id="About">
      <p className="about-title title">ABOUT ME</p>
      <div className="about-body">
        <div className="about-board">
          <p className="about-subtitle">SKILLS</p>
          <div className="about-content">
            <p>Python, Django</p>
            <p>JavaScript, React, Node.js, Express.js</p>
          </div>
        </div>
        <div className="about-baord">
          <p className="about-subtitle">EXPERIENCE</p>
          <div className="about-content">
            <p>Education</p>
            <p>홍익대학교 산업공학 전공</p>
            <p>SSAFY 삼성 청년 소프트웨어 아카데미</p>
            <p>Prize</p> 
            <p>신한 해커톤</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
