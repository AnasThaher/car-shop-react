import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import swal from 'sweetalert';

function CarDetails(props) {
  const [car, setCar] = useState("");
  const params = useParams();
  const [orderD, setorderD] = useState('');
  const getCarById = (id) => {
    return fetch(`http://127.0.0.1:8000/api/car/${id}`)
      .then((res) => res.json())
      .then((json) => setCar(json["data"][0]));
  };
  useEffect(() => {
    getCarById(params.id);
  }, []);
  let style = {
    backgroundColor:'#0077b6',
  }
 
  const formT = `<form>
    <input type="text" />
    <input type="text" />
    <input type="text" />
  </form>`
  
  const order = (request) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: request.user_id,
        location: request.location,
        price: request.price,
        car_id: request.car_id,
        user_name: request.user_name,
      }),
    };
    fetch("http://127.0.0.1:8000/api/order", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        setorderD(json);
        }
      );
  }
 const handleClickOpen = ()=>{
  const user = JSON.parse( localStorage.getItem('loginUser'));
  const request = {
    user_name: user.name,
    car_id:car.id,
    price: car.price,
    location: 'sui',
    user_id:user.id
  };
  swal({
    title: "Are you sure you want to order it?",
    icon: 'http://127.0.0.1:8000/'+car.image,
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    order(request);
          swal(orderD, {
          });
        
  });
  
 }
  return (
    <div className="container">
      <div className="box">
        <div className="images">
          <div className="img-holder active">
            <img src={`http://127.0.0.1:8000/${car.image}`} alt="t" />
          </div>
          <div className="img-holder">
            <img src={`http://127.0.0.1:8000/${car.image}`} />
          </div>
          <div className="img-holder">
            <img src={`http://127.0.0.1:8000/${car.image}`} />
          </div>
          <div className="img-holder">
            <img src={`http://127.0.0.1:8000/${car.image}`} />
          </div>
        </div>
        <div className="basic-info">
          <h1>{car.name}</h1>
          <div className="detai-car">
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
            </div>
            <span>{car.number} N</span>
          </div>
          <div className="detai-car">
            <span>$ {car.price}</span>
            <span>{car.miles} miles</span>
            <span style={{ color: `${car.color}` }}> {car.color}</span>
          </div>
          <div className="options">
            <a onClick={handleClickOpen}>Buy It Now</a>
          </div>
        </div>
        <div className="description">
          <p>{car.details}</p>

          <ul className="social">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
