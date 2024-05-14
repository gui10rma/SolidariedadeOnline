import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import "./imagemprincipal.css";

const ImagemPrincipal = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Ativa o autoplay
        autoplaySpeed: 3000 // Intervalo de tempo entre os slides (3 segundos)
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.src} alt={image.alt} className="imgOngs" />
                </div>
            ))}
        </Slider>
    );
};


export default ImagemPrincipal;