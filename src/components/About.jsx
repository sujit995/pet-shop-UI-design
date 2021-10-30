import React from 'react';
import './styles.scss';
import about from '../images/about_img.png';
import dogfood from '../images/dog_food.png'
import shopdog from '../images/shop_now_dog.png';
import catfood from '../images/cat_food.png';
import catshop from '../images/shop_now_cat.png';

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="image">
                    <img src={about} alt="about" />
                </div>
                <div className="content">
                    <h3>Premium<span> Pet Food</span> manufacturer</h3>
                    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                    <a href="#" className="btn">read more</a>
                </div>
            </section>
            <div className="dog-food">
                <div className="image">
                    <img src={dogfood} alt="" />
                </div>
                <div className="content">
                    <h3><span>air dried</span> dog Food</h3>
                    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                    <div className="amount">$15 - $30</div>
                    <a href="#"><img src={shopdog} /></a>
                </div>
            </div>
            <div className="cat-food">
                <div className="content">
                    <h3><span>air dried</span> cat Food</h3>
                    <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                    <div className="amount">$15 - $30</div>
                    <a href="/"><img src={catshop} /></a>
                </div>
                <div className="image">
                    <img src={catfood} alt="" />
                </div>
            </div>
        </>
    )
}

export default About
