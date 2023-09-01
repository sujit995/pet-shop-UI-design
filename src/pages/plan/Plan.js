import React from 'react'
import './styles.scss';

const Plan = () => {
    return (
        <section className="plan" id="plan">
            <h1 className="heading"> choose a <span>plan</span></h1>
            <div className="box-container2">
                <div className="box2">
                    <h3 className="title">pet care</h3>
                    <h3 className="day">15 day</h3>
                    <i className="fas fa-bicycle icon"></i>
                    <div className="list">
                        <p>pet room<span className="fas fa-check"></span></p>
                        <p>pet grooming<span className="fas fa-check"></span></p>
                        <p>pet exercise<span className="fas fa-check"></span></p>
                        <p>pet meals<span className="fas fa-check"></span></p>
                    </div>
                    <div className="amount"><span>$</span>70</div>
                    <a href="#" className="btn"> choose plan
                    </a>
                </div>

                <div className="box2">
                    <h3 className="title">pet care</h3>
                    <h3 className="day">30 days</h3>
                    <i className="fas fa-motorcycle icon"></i>
                    <div className="list">
                        <p>pet room<span className="fas fa-check"></span></p>
                        <p>pet grooming<span className="fas fa-check"></span></p>
                        <p>pet exercise<span className="fas fa-check"></span></p>
                        <p>pet meals<span className="fas fa-check"></span></p>
                    </div>
                    <div className="amount"><span>$</span>350</div>
                    <a href="#" className="btn"> choose plan
                    </a>
                </div>

                <div className="box2">
                    <h3 className="title">pet care</h3>
                    <h3 className="day">45 days</h3>
                    <i className="fas fa-car-side icon"></i>
                    <div className="list">
                        <p>pet room<span className="fas fa-check"></span></p>
                        <p>pet grooming<span className="fas fa-check"></span></p>
                        <p>pet exercise<span className="fas fa-check"></span></p>
                        <p>pet meals<span className="fas fa-check"></span></p>
                    </div>
                    <div className="amount"><span>$</span>650</div>
                    <a href="#" className="btn"> choose plan
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Plan
