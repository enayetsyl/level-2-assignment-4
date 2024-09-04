import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 bg-medium-black rounded-tr-[220px] h-96"></div>
        <div className="w-1/2 bg-medium-black rounded-tl-[220px] h-96"></div>
      </div>
      <div className="-mt-44 bg-medium-black ">
        <div className="flex justify-between items-center lg:gap-10 gap-3 px-2 lg:px-10 text-white">
          <div>
            <h1>Sylhet Office</h1>
            <p>136, Ambia Road</p>
            <p>Uposhohor, Sylhet</p>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-light-gold text-center">Our Address</h1>
          </div>
          <div>
            <h1>Dhaka Office</h1>
            <p>136, Ambia Road</p>
            <p>Dhanmondi, Dhaka</p>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-5 lg:gap-10 px-10 border-t-2 border-white border-solid py-5 bg-medium-black">
          <a
            href="https://www.linkedin.com/in/md-enayetur-rahman/"
            target="_blank"
            className="uppercase text-white font-medium border-b border-solid border-white"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094416483981"
            target="_blank"
            className="uppercase text-white font-medium border-b border-solid border-white"
          >
            Facebook
          </a>
          <a
            href="https://x.com/enayetu_syl?mx=2"
            target="_blank"
            className="uppercase text-white font-medium border-b border-solid border-white"
          >
            Twitter
          </a>
          <a
            href="http://www.youtube.com/@MdEnayeturRahman"
            target="_blank"
            className="uppercase text-white font-medium border-b border-solid border-white"
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
