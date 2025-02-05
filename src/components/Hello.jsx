import React from "react";

const Hellow = () => {
  return (
    <div className="text-center mb-20">
      <div className="absolute top-10 left-5">
        <img className="w-[130px]" src="/longLogo.svg" alt="log" />
      </div>
      <div className="w-[146px] h-[146px] rounded-full border-2 border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 flex items-end justify-center overflow-hidden mx-auto">
        <img className=" h-[136px]" src="/img/hello.png" alt="hello" />
      </div>
      <p className="text-[#1A1A1A] text-[22px] mt-6">Сайн байна уу,</p>
      <div className="mt-4">
        <p className="text-lg text-[#1A1A1A]">
          Танд шинэ ажилд орох эсвэл давхар ажил хийх хэрэгцээ байгаа бол
          эхлүүлэх товчийг дарна уу.
        </p>
        <p className="text-[#1A1A1A] opacity-80 mt-2">
          Ердөө 2 минут л зарцуулагдана
        </p>
      </div>
    </div>
  );
};

export default Hellow;
