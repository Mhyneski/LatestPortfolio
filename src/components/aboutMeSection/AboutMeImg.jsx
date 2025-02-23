import React from "react";

const AboutMeImg = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img src="../../images/aboutme.jpg" alt="about me image" className="h-[500px] w-auto object-cover"/>
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImg;
