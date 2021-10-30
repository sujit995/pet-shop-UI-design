import React from 'react'
import './styles.scss';
import cnt from '../images/contact_img.png';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="image">
                <img src={cnt} alt="" />
            </div>
            <form action="" >
                <h3>contact us</h3>
                <input type="text" placeholder="your name" className="box" />
                <input type="email" placeholder="your email" className="box" />
                <input type="number" placeholder="your number" className="box" />
                <textarea name="" placeholder="your message" cols="30" rows="10" />
                <input type="submit" value="send message" className="btn" />
            </form>
        </section>
    )
}

export default Contact
