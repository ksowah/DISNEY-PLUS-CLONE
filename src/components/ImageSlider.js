import React from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel';

function ImageSlider() {

    const settings = {
        autoplay: true,
        autoplayInterval: 5000,
        autoplayReverse: true,
        pauseOnHover: true,
        speed: 1500,
        wrapAround: true,
        frameOverflow: 'display',
        framePadding: '20px'
    }

    
    return (
       
        <Slider {...settings}>
            <img src='/media/images/slider-badging.jpg'/>
            <img src='/media/images/slider-badag.jpg'/>
            <img src='/media/images/slider-scale.jpg'/>
            <img src='/media/images/slider-scales.jpg'/>
            <img src='/media/images/slider-genie.jpg'/>
        </Slider>
    )
}

export default ImageSlider

const Slider = styled(Carousel)`
    margin-top: 20px;

    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }

`

