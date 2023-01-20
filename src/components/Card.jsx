import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const Card = (props) => {
  return (
    <div>
        
        <Link to={`/carDetails/${props.car.id}`} className="card-link">
                    <div className="card car-card" >
                        <span className="btn btn-danger Featured-sign">Featured</span>
                        <div className="card-image">
                            <img src={`http://127.0.0.1:8000/${props.car.image}`} className="card-img-top " alt="car photo"/>
                        </div>
                        <div>
                            <div className="card-body pb-0">
                                <h5 className="card-title">{props.car.name}</h5>
                                <p className="price-car">$ {props.car.price}</p>

                            </div>
                            <div className="card-body pt-0 mt-0">
                                <li className="list-group-item">{props.car.number}</li>

                            </div>
                        </div>

                        <div className="card-body footer-card">
                            <span> <i className="fa-solid fa-road"></i> {props.car.miles}</span>

                            <span> <i className="fa-solid fa-chart-simple"></i> Manual</span>

                            <span> <i className="fa-solid fa-calendar-days"></i> {moment(props.car.year).format('yyy')}</span>
                        </div>
                    </div>
                </Link>
    </div>
  )
}

export default Card