import React from "react";

export default function Hero() {
  const CurveBottom = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#42bdec"
        className="hero-curve-bottom animFill"
      >
        <path
          fillOpacity="1"
          d="M0,224L48,197.3C96,171,192,117,288,106.7C384,96,480,128,576,122.7C672,117,768,75,864,69.3C960,64,1056,96,1152,117.3C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    );
  };
  return (
    <section className="home-hero anim pb-5">
      <div className="container fx">
        <div className="maxw-lg">
          <h1 className="text-xl">
            <span>
              We boost{" "}
              <span className="text-brandcolor has-underline">growth</span> for
              your startup business
            </span>
          </h1>
        </div>
        <figure>
          <img
            width="619"
            height="604"
            src="/images/hero/sitting-with-laptop-2x.png"
            alt="Man Sitting With Laptop"
          />
        </figure>
      </div>
      {/* <CurveBottom /> */}
    </section>
  );
}
