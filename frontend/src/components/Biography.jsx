import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="About Img" />
      </div>
      <div className="banner">
        <p>BIOGRAPHY</p>
        <h3>Who We Are</h3>
        <p>
          At CareCraft, we go beyond the conventional healthcare experience.
          With us, booking appointments for your preferred doctor in your
          desired department is effortless and convenient. Whether you seek
          specialized care or routine check-ups, our seamless booking system
          ensures that your journey towards optimal health is smooth and
          hassle-free.
        </p>
        <p>
          {" "}
          Experience the difference with CareCraft, where your well-being is our
          top priority every step of the way.
        </p>
        <p>Embark on your path to wellness with ease at CareCraft.</p>
        <p>
          With our user-friendly appointment booking system, you have the power
          to choose the doctor and department that best aligns with your needs
          and preferences. Whether you're scheduling a consultation with a
          specialist or seeking routine care, our dedicated team is here to
          facilitate a seamless and personalized experience..
        </p>
      </div>
    </div>
  );
};

export default Biography;
