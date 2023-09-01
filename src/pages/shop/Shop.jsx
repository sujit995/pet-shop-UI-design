import React from 'react';
import './styles.scss';
import img1 from '../../images/product_01.jpg'
import img2 from '../../images/product_02.jpg'
import img3 from '../../images/product_03.jpg'
import img4 from '../../images/product_04.jpg'
import img5 from '../../images/product_05.jpg'
import img6 from '../../images/product_06.jpg'

const product = [
    {
        name: 'Air-Dried Food',
        img: `${img1}`,
        price: '$15'
    },
    {
        name: 'Air-Dried Food',
        img: `${img2}`,
        price: '$13'
    },
    {
        name: 'Air-Dried Food',
        img: `${img3}`,
        price: '$17'
    },
    {
        name: 'Air-Dried Food',
        img: `${img4}`,
        price: '$12'
    },
    {
        name: 'Air-Dried Food',
        img: `${img5}`,
        price: '$20'
    },
    {
        name: 'Air-Dried Food',
        img: `${img6}`,
        price: '$18'
    }
]
const Shop = () => {
    return (
        <section className="shop" id="shop">
            <h1 className="heading">our <span> products</span></h1>
            <div className="box-container">
                {
                    product.map((items) => {
                        return (
                            <div className="shopbox">
                                <div className="icons">
                                    <a href="#" className="fas fa-shopping-cart"></a>
                                    <a href="#" className="fas fa-heart"></a>
                                    <a href="#" className="fas fa-eye"></a>
                                </div>
                                <div className="image">
                                    <img src={items.img} alt="" />
                                </div>
                                <div className="content">
                                    <h3>{items.name}</h3>
                                    <div className="amount">{items.price}</div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Shop
