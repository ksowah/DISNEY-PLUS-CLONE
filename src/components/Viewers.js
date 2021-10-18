import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap src='/media/images/viewers-disney.png'/>
            <Wrap src='/media/images/viewers-pixar.png'/>
            <Wrap src='/media/images/viewers-marvel.png'/>
            <Wrap src='/media/images/viewers-starwars.png'/>
            <Wrap src='/media/images/viewers-national.png'/>
                
        </Container>    
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

`

const Wrap = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        transform: scale(1.05);
        border: 4px solid rgba(249, 249, 249, 0.8); 
    }

`

