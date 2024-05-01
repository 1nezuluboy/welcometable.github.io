import React from "react";
import "./Services.css";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={service1} alt="" />
        <div className="caption">
          <img src={services1} alt="" />
          <p>Tigashire & Batanai Restaurants</p>
        </div>
      </div>

      <div className="service">
        <img src={service2} alt="" />
        <div className="caption">
          <img src={services2} alt="" />
          <p>Revitalize with Refreshing Beverage Choices</p>
        </div>
      </div>

      <div className="service">
        <img src={service3} alt="" />
        <div className="caption">
          <img src={services3} alt="" />
          <p>Refreshing Beds For A Refreshing Sleep</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
