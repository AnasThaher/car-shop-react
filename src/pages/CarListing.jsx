import React from 'react'
import Card from '../components/Card';
import Navbar from '../components/Navbar'

function CarListing(props) {
  let style = {
    backgroundColor:'#0077b6',
  }
    return (
        <section className='navbar2-par'>
       
          <section className="car-products carlisting">
            <section className="boxes container">
              <div className="heading">
                <h1>Featured Cars</h1>
              </div>
              <div className="car-boxes ">
                {props.cars.map((item,index) => <Card key={index} car={item} />)}
    
              </div>
            </section>
          </section>
        </section>
  )
}

export default CarListing