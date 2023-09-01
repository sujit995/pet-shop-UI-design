import React from 'react'
import './styles.scss';

const Services = () => {
    return (
        <section className="services" id="services">
            <h1 className="heading">Our <span>Services</span></h1>
            <div className="box-container1">
                <div className="box1">
                    <i className="fas fa-dog"></i>
                    <h3>dog boarding</h3>
                    <a href="#" className="btn">read more</a>
                </div>
                <div className="box1">
                    <i className="fas fa-cat"></i>
                    <h3>cat boarding</h3>
                    <a href="#" className="btn">read more</a>
                </div>
                <div className="box1">
                    <i className="fas fa-bath"></i>
                    <h3>spa & grooming</h3>
                    <a href="#" className="btn">read more</a>
                </div>
                <div className="box1">
                    <i className="fas fa-drumstick-bite"></i>
                    <h3>healthy meal</h3>
                    <a href="#" className="btn">read more</a>
                </div>
                <div className="box1">
                    <i className="fas fa-baseball-ball"></i>
                    <h3>exercies</h3>
                    <a href="#" className="btn">read more</a>
                </div>
                <div className="box1">
                    <i className="fas fa-heartbeat"></i>
                    <h3>healthy care</h3>
                    <a href="#" className="btn">read more</a>
                </div>
            </div>
        </section>
    )
}

export default Services
