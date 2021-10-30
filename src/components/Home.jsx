import React from 'react'
import './styles.scss';
import wave from '../images/bottom_wave.png';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="content">
                <h3><span>hi</span> Welcome to our pet shop</h3>
                <a href="#" className="btn" id="btn-btn">shop now</a>
            </div>
            <img src={wave} alt="wave-img" className="wave"/>
        </section>
    )
}

export default Home
