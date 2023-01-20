import React from "react";
import Card from "./Card";

const Featured = (props) => {
  return (
    <>
      <section className="car-products">
        <div className="car-form">
          <form className="row ">
            <div className=" col-md-6 col-sm-12 col-md-6 col-lg-2 m-0 p-0">
              <label className="visually-hidden">Preference</label>
              <select className="form-select">
                <option>Select Brand</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-12 col-md-6 col-lg-2 m-0 p-0">
              <label className="visually-hidden">Preference</label>
              <select className="form-select">
                <option>Select Make</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-12 col-md-6 col-lg-2 m-0 p-0">
              <label className="visually-hidden">Preference</label>
              <select className="form-select">
                <option>Select Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-12 col-md-6 col-lg-2 m-0 p-0">
              <label className="visually-hidden">Preference</label>
              <select className="form-select">
                <option>Select Year</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-12 col-md-6 col-lg-2 m-0 p-0">
              <label className="visually-hidden">Preference</label>
              <select className="form-select">
                <option>Select Type Of Car</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="col-md-6 col-sm-12 col-md-6 col-lg-2 m-0 p-0">
              <button type="submit" className=" w-100 btn  find-btn">
                <i className="fa-solid fa-magnifying-glass btn-searsh-find-icon"></i>{" "}
                Find
              </button>
            </div>
          </form>
        </div>

        <section className="boxes container">
          <div className="heading">
            <h1>Featured Cars</h1>
            <span>All / Apartment / House / Office </span>
          </div>
          <div className="car-boxes ">
            {props.cars.map((item,index) => <Card key={index} car={item} />)}

          </div>
        </section>
      </section>
    </>
  );
};

export default Featured;
