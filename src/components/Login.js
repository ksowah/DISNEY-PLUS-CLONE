import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
           <Content>
                <LogoOne src='/media/images/cta-logo-one.svg'/>   
                <SignUpBtn>GET ALL THERE</SignUpBtn>
                <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sint, saepe! Laudantium iure harum ad explicabo debitis 
            numquam iste eaque ex repellendus dolorum soluta, 
            reiciendis hic ut perferendis laboriosam, et enim.
                </Description>
                <LogoTwo src='/media/images/cta-logo-two.png'/>
            </Content> 
        </Container>
    )
}

export default Login

const Container = styled.div`
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    min-height: calc(100vh - 70px);
    align-items: top;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    

    &:before{
        background-position: top;
        content: '';
        background-image: url('/media/images/login-background.jpg');
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0.7;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        z-index: -1;
    }

`

const Content = styled.div`
    width: 90%;
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;

`

const LogoOne = styled.img`
    

`

const LogoTwo = styled.img`
    margin-top: 25px;

`

const SignUpBtn = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 15px;

    &:hover{
        background-color: #0483ee;  
    }

`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 1.5;

`

