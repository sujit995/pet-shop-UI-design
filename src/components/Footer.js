import React from 'react';
import topWave from '../images/top_wave.png';
import './styles.scss';

const Footer = () => {
    return (
        <section className="footer" id="footer">
            <img src={topWave} alt="" />

            <div className="share">
                <a href="#" className="btn"><i className="fab fa-facebook"></i> facebook</a>
                <a href="#" className="btn"><i className="fab fa-instagram"></i> instagram</a>
                <a href="#" className="btn"><i className="fab fa-twitter"></i> twitter</a>
                <a href="#" className="btn"><i className="fab fa-linkedin"></i> linkedin</a>
                <a href="#" className="btn"><i className="fab fa-pinterest"></i> pinterest</a>
            </div>
            <div className="credits">
                created by <span>Sujit Mishra</span> | all &copy;rights reserved!
            </div>
        </section>
    )
}

export default Footer
