import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Link to='/detail'>
                    <Wrap src='/media/images/bg.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie1.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie2.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie3.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie4.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie5.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie6.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie7.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie8.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie9.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie10.jpg'/>
                </Link>    
                <Link to='/detail'>
                    <Wrap src='/media/images/movie11.jpg'/>
                </Link>    
                
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
overflow-x: hidden;

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    padding: 20px 30px;
    margin: 20px 0;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media(max-width: 900px){
        grid-template-columns: repeat(3, minmax(0, 1fr));

    }

`

const Wrap = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8); 
    }

`
